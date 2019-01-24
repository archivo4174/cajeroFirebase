
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

    function innerHTML(id,result){
      return document.getElementById(id).innerHTML+=result;
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
    function table(nombre,precio,descripcion){
      return '<div class="tar1 mt-4 col-lg-3 col-md-6">'+
       '<div class="card animated bounceInUp  style="width: 18rem;" >'+
          '<img class="card-img-top" src=" http://drive.google.com/uc?export=view&id=1QlPubZyUlnIhrDEgeT_RNSNfVlg-z7_s">'+
          '<div class="card-body">'+
            '<h5 class="card-title">'+nombre+'</h5>'+
            '<span >Precio:</span>'+
            '<h6 style="width:75%; float:right;"  class="card-title">'+precio+'</h6>'+
            
            '<p style="width:100%; float:right;" class="card-text">'+descripcion+'</p>'+
            '<div>'+
              '<div>'+
            '<input id="" class="form-control colorful" type="number" value="1" min="1"/>'+
            '<a " class="btn btn-ttc" id="agregar">'+
            '<img src="imagenes/car.png">'+
            '</a>'+
              '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+      
    '</div>';
    }
    function whatchTabs(){
      var task = firebase.database().ref("task/");
      task.on("clild_added",function(data){
        var taskValue = data.val();
        var results = table(taskValue.nombre,taskValue.descripcion,taskValue.precio);
        innerHTML("listado",results);
        console.log(results);
      });
        

      
    }

