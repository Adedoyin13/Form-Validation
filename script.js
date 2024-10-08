const form = document.getElementById("form");
const password1El = document.getElementById("password1")
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

const validateForm = () => {
    
    // Using Contraint API
    isValid = form.checkValidity();

    if (!isValid) {
        message.textContent = "Please fill out all fields";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }

    // Check to see if password match

    if(password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = "green !important";
        password2El.style.borderColor = "green !important";
    } else {
       passwordMatch = false;
       message.textContent = "Make sure passwords match."; 
       message.style.color = "red";
       messageContainer.style.borderColor = "red";
       password1El.style.borderColor = "red !important";
       password2El.style.borderColor = "red !important";
       return;
    }

    // If form is valid and passwords match
    if(isValid && passwordMatch) {
        message.textContent = "Successfully Registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}

const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value
    };

    // Save user data
    console.log(user);
};

const processFormData = (event) => {
    event.preventDefault();

    // Validate Form 
    validateForm();

    // Submit Data if valid
    if (isValid && passwordMatch) {
        storeFormData();
        form.reset();
    }
}

// Event Listener
form.addEventListener("submit", processFormData);


