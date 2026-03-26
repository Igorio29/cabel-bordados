document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario === "admin" && senha === "1234"){
        alert("Login realizado com sucesso!");
        window.location.href = "dashboard.html";
    }else{
        document.getElementById("mensagem").innerText = "Usuário ou senha incorretos";
    }

});