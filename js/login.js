// step 1: add click event handler with the submit button

document.getElementById("button-submit").addEventListener("click", function () {
  // step 2: get the email address inside the email input field
  //always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // step 3: get Password
  // 3.a: set id on the html
  // 3.b: get the element
  // 3.c: get the value from the element
  const passwordField = document.getElementById("user-Password");
  const password = passwordField.value;

  // DANGER: do not varify email password on the client side
  // step 4: verify email and password and check wheter valid user or not
  if (email === "sontan@baap.com" && password === "secret") {
    console.log("valid user");
  } else {
    console.log("Invalid user");
  }
});
