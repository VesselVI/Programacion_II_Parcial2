let user = document.getElementById("usernameInput");
let pass = document.getElementById("passwordInput");
let btn = document.getElementById("submit-login");

class Usuario{
    constructor(user,pass){
        this.user = user;
        this.pass = pass;
    }


    validacion(user,pass){
        return this.user === user && this.pass === pass;
    }
}

let admin = new Usuario ( "admin", "1234");
localStorage.setItem("usuario", JSON.stringify(admin));

btn.addEventListener("click", () => {
    let userEvent = user.value;
    let passEvent = pass.value;

        let info = JSON.parse(localStorage.getItem("usuario"));
        let user1 = new Usuario(info.user, info.pass);

    if(user1.validacion(userEvent,passEvent)){
        document.open();
        window.location.href = "index.html"
    } else{
        alert("Usuario o contraseña incorrectas")
    }
});