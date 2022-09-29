const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");


form.addEventListener("submit", e => {
    e.preventDefault();

    var fname = firstName.value.trim();
    var lname = lastName.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if (fname === "") {
        addErrorTo(firstName, "First Name cannot be empty");
    } else {
        success(fname)
    }
    if (lname === "") {
        addErrorTo(lastName, "Last Name cannot be empty");
    } else {
        success(lname)
    }
    if (emailValue === "") {
        addErrorTo(email, 'Email cannot be empty');
    } else if (!isValid(email)) {
        addErrorTo(email, "Looks like this is not an email");
    } else {
        success(email)
    }
    if (passwordValue === "") {
        addErrorTo(password, "Password cannot be empty");
    } else {
        success(password)
    }
  });


  function addErrorTo(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
    // small.innerText = message;
    // small.style.display = 'block';
  }

  function success(req) {
    req.className += 'success';
  }

  function isValid(email) {
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }