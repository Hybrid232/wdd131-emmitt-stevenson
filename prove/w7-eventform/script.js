const form = document.querySelector("#ticketForm");
const typeRange = document.querySelector("#typeRange");
const fieldContainer = document.querySelector("#fieldContainer");
const ticketInput = document.querySelector("#ticketInput");
const typeLable = document.querySelector("label[for='ticketInput']")
const result = document.querySelector("#result");


// Type Field Function
function updateUserInputField(){
    const value = typeRange.value;

    if(value === "student"){
        fieldContainer.hidden = false;
        typeLable.textContent = "Student I#";
        ticketInput.required = true;

    } else if(value === "guest"){
        fieldContainer.hidden = false;
        typeLable.textContent = "Access Code";
        ticketInput.hidden = false;

    } else {
        fieldContainer.hidden = true;
        ticketInput.required = false;

    }
}

typeRange.addEventListener("change", updateUserInputField);
updateUserInputField();


// Past date Function
function pastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

// Submit Form Button
form.addEventListener("submit", function(event){
    event.preventDefault();

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const type = form.typeRange.value;
    const inputValue = ticketInput.value.trim();
    const dateValue = document.querySelector("#eventDate").value;

    if (pastDate(dateValue)){
        result.textContent = "Please select a future date!"
        return;
    }

    if (type === "student") {
        studentSubmit(inputValue, firstName, lastName, type, dateValue);
    } else if (type === "guest") {
        guestSubmit(inputValue, firstName, lastName, type, dateValue);
    }
});

// Student Submit Funciton
function studentSubmit(studentID, firstName, lastName,type, dateValue) {
    if (studentID.length == 9) {
        result.innerHTML = `
            <h2>Ticket Created</h2>
            <p>${firstName} ${lastName}</p>
            <p>${type}</p>
            <p>${dateValue}</p>
        `
    } else {
        result.textContent = "Student I# needs to be 9 digets"
        return;
    }
};

// Guest Submit Funciton
function guestSubmit(accessCode, firstName, lastName, type, dateValue){
    if (accessCode == "EVENT131"){
        result.innerHTML = `
            <h2>Ticket Created</h2>
            <p>${firstName} ${lastName}</p>
            <p>${type}</p>
            <p>${dateValue}</p>
        `
    } else {
        result.textContent = "Invalid Access Code"
    }
}
