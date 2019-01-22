
(function(){


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
//get elements
  const preObject = document.getElementById('object');
  // create references
  const dbRefObject = firebase.database().ref().child('object');


  dbRefObject.on('value', snap => )
}());