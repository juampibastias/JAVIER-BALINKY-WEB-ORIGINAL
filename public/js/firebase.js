// Initialize Firebase
var config = {
  apiKey: "AIzaSyDpurAsKNEYUtyOV7RYS_rOz3N0DEs3_eI",
  authDomain: "drbelinky-web.firebaseapp.com",
  databaseURL: "https://drbelinky-web.firebaseio.com",
  projectId: "drbelinky-web",
  storageBucket: "drbelinky-web.appspot.com",
  messagingSenderId: "595717907152",
  appId: "1:595717907152:web:6c70a2eb61ef18eecff4d5",
  measurementId: "G-E38PBVCCNK"
  };
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages-from-web');
let leadTimestamp = Math.floor(Date.now() / 1000);

window.addEventListener('load', function(){
  let target = document.getElementById('contactForm');
  target.addEventListener('submit', submitForm, false);
});

function submitForm(e){
    e.preventDefault();

    // get Values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let subject = getInputVal('subject');
    let message = getInputVal('message');
	let timestamp = leadTimestamp;
    //save message
    saveMessage(name, email, message, subject, timestamp);
    
    //go to success response
    window.location = '../message-success.html';
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message, subject, timestamp){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        topic: subject,
        message: message, 
        timestamp: timestamp
    })
}

