
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  const pokemones = [];//desfinir un arreglo en javascrips

  const cargarTabla = ()=>{
    // 1-una referencia a la tabla( tabla a caragr)
    let tbody = document.querySelector("#tbody-pokemon");//nota para la clase se pone .tbody-pokemon ve a buscar el documento que tiene el tbody oikemon y guaradalo en let body
    tbody.innerHTML = ""; // ES PARA LIMPIAR LA EJECUCION DEL CODIGO
    // 2-por cada pokemon generar una fila
    for(let i=0; i < pokemones.length; ++ i){
       let p = pokemones[i];
       // crea un elemento que no existe, pero no lo agrega a la pagina
       // puedo crear cualquier etiqueta html aqui
       let tr = document.createElement("tr");
       // 3-por cada atributos de los pokemon(nombre ,tipo etc) generar una celda
       let tdNombre = document.createElement("td");
       let tdTipo = document.createElement("td");
       let tdDescripcion = document.createElement("td");
       let tdNro = document.createElement("td");
       let tdAcciones = document.createElement("td");
       //es para poner el texto que va dentro de la celda, osea p
       tdNombre.innerText = p.nombre;
       tdTipo.innerText = p.tipo;
       //todo: esto no va a funcionar a la primera
       tdDescripcion.innerHTML = p.descripcion;
       tdNro.innerText = i + 1;
       // todo:  agregar botton acciones
       tr.appendChild(tdNro);
       tr.appendChild(tdNombre);
       tr.appendChild(tdTipo);
       tr.appendChild(tdDescripcion);
       tr.appendChild(tdAcciones);
       tbody.appendChild(tr);
       
    }
    
    // 4-agregar esa fila a la tabla(manipulando el DOM)
  };
 //referencia documento web-buscar dentro de la pag-#pokemon-form-se le agrega un listener-submit es el evento
 //-funciones de llaves( lo que va al medio es el evento)-e.preventdefault(es para que no se recargue la pag.)
 document.querySelector("#pokemon-form").addEventListener('submit', (e)=>{
 e.preventDefault();//prevenir que el formulario recargue la pagina
 let nombre = document.querySelector("#nombre-txt").value;
 let descripcion = tinymce.get("descripcion-txt").getContent();
 let legendario = document.querySelector("#legendario-si").checked;
 let tipo = document.querySelector("#tipo-select").value;
 
 let pokemon ={};
 pokemon.nombre = nombre;
 pokemon.descripcion = descripcion;
 pokemon.legendario = legendario;
 pokemon.tipo = tipo;

 pokemones.push(pokemon);// datos  dentro de un arreglo
 cargarTabla();
 
 });