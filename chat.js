const firebaseConfig = {
    apiKey: "AIzaSyChCbsl69zVYJhfyynFXLu7mBKMm__4-5k",
    authDomain: "kwitter-d03a2.firebaseapp.com",
    databaseURL: "https://kwitter-d03a2-default-rtdb.firebaseio.com",
    projectId: "kwitter-d03a2",
    storageBucket: "kwitter-d03a2.appspot.com",
    messagingSenderId: "459643750918",
    appId: "1:459643750918:web:9af8b99de0389a75335187"
  };
  
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

  window.location(chat_room.html)
   
}



