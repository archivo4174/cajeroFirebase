
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgRaQ97v5F1pKwvg36Blg2HllKVEQUOVw",
    authDomain: "prueba1rapag.firebaseapp.com",
    databaseURL: "https://prueba1rapag.firebaseio.com",
    projectId: "prueba1rapag",
    storageBucket: "prueba1rapag.appspot.com",
    messagingSenderId: "105811925026"
  };
  firebase.initializeApp(config);
    function getID(id) {
      return document.getElementById(id).value;
      
    }
    function agregardatos(id,result){
      return document.getElementById(id).value=result;
    }
    function arrayJSON(nombre,descripcion,precio,imagenurl){
      var data ={
        nombre:nombre,
        descripcion,descripcion,
        precio:precio,
        imagenurl:imagenurl
      };
      return data;
    };
    function insertTask(){
      var id = getID("id");
      var  nombre = getID("nombre");
      var descripcion = getID("descripcion");
       var precio = getID("precio");
       var imagenurl = getID("imagenurl");
        if (id.length==0 || nombre.length==0 || precio.length==0  || descripcion.nombre==0){
        alert("llena los campos");
       }else{
        var arrayData = arrayJSON(nombre,descripcion,precio,imagenurl);
        console.log(arrayData)
        var task = firebase.database().ref("taks/"+id);
        task.set(arrayData);
        alert("se guardo el producto");
        agregardatos("id","");
        agregardatos("nombre","");
        agregardatos("descripcion","");
        agregardatos("precio","");
       }
    }


