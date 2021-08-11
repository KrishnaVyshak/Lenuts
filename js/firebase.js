// Initialize Firebase
var config = {
    apiKey: "AIzaSyCA8EinPayZKJQdm-FQG3aA1Q0EXCgCMiY",
    authDomain: "fire-base-data-base-000.firebaseapp.com",
    databaseURL: "https://fire-base-data-base-000.firebaseio.com",
    projectId: "fire-base-data-base-000",
    storageBucket: "fire-base-data-base-000.appspot.com",
    messagingSenderId: "948854472628",
    appId: "1:948854472628:web:f498a7834cd134487e7ce1"
  };
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
