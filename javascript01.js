document.querySelector(".login-box").addEventListener("submit", function(e) {

    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    const emailCorreto = "estudantedofuturo01@gmail.com";
    const senhaCorreta = "123456789";

    if (email === emailCorreto && senha === senhaCorreta) {
        window.location.href = "html02.html";
    } else {
        alert("Email ou senha incorretos!");
    }

});