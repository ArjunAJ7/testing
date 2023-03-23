function submission() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phonenumber").value;
  alert(
    "I will find you !\nI have your contact info\nName: " +
      name +
      "\nEmail: " +
      email +
      "\nPhone number: " +
      phone
  );
}

function resetting() {
  form.reset();
}
