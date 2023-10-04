
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        
        console.log("Email: " + email);
        console.log("Password: " + password);

        // You can send the data to a server or perform further actions here
    });
});
