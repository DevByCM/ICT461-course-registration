const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName");
    const studentId = document.getElementById("studentId");
    const email = document.getElementById("email");
    const semester = document.getElementById("semester");
    const confirmation = document.getElementById("confirmation");

    const nameError = document.getElementById("nameError");
    const idError = document.getElementById("idError");
    const emailError = document.getElementById("emailError");
    const semesterError = document.getElementById("semesterError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    idError.textContent = "";
    emailError.textContent = "";
    semesterError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    if (studentId.value.trim() === "") {
        idError.textContent = "Please enter your student ID.";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your university email.";
        isValid = false;
    } else if (!email.validity.valid) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (semester.value === "") {
        semesterError.textContent = "Please select a semester.";
        isValid = false;
    }

    if (!confirmation.checked) {
        alert("Please confirm that your information is correct.");
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent =
            "Registration successful! You have registered for ICT461.";

        form.reset();
    }
});