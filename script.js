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
    // console.log(isValid);
    // Style main message for an error
    // message.textContent = "Please fill out all fields";
    // message.style.color = "red";
    // messageContainer.style.borderColor = "red"; we wrap everything with if and else

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
        password2El.style.borderColor = "green !imortant";
    } else {
       passwordMatch = false;
       message.textContent = "Make sure passwords match."; 
       message.style.color = "red";
       messageContainer.style.borderColor = "red";
       password1El.style.borderColor = "red !imortant";
       password2El.style.borderColor = "red !imortant";
       return;
    }

    // If form is valid and passwords match
    if(isValid && passwordMatch) {
        message.textContent = "Successfully Registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
        // password1El.style.borderColor = "green";
        // password2El.style.borderColor = "green";
    }
}

const storeFormdata = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

    // Do something with user data
    console.log(user);
};



const processFormData = (e) => {
    e.preventDefault();
    // console.log(e);

    // Validate Form 
    validateForm();

    // Submit Data if valid
    if (isValid && passwordMatch) {
        storeFormdata();
        form.reset();
    }
}

// Event Listener
form.addEventListener("submit", processFormData);