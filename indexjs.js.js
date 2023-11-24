document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (username === "Marcel" && password === "Ligue") {
        window.close('index.html')
        window.open('home.html')
    } else {
        alert("Login failed. Please check your username and password.");
    }
});
