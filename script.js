function checkPassword() {
    const correctPassword = "mypassword123"; // Change this to your desired password
    const userInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error");

    if (userInput === correctPassword) {
        // Redirect to the actual content
        window.location.href = "content.html"; // Replace with the actual content page
    } else {
        errorMessage.style.display = "block";
    }
}
