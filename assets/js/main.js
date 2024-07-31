function Persona(nombre, correo, trabajo, telefono, info) {
  this.nombre = nombre;
  this.correo = correo;
  this.trabajo = trabajo;
  this.telefono = telefono;
  this.info = info;
  this.imprimirInfo = function () {
    const userName = document.querySelector("#user-name");
    const userphone = document.querySelector("#user-phone");
    const userEmail = document.querySelector("#user-email");
    const userJob = document.querySelector("#user-job");
    const userInfo = document.querySelector("#user-info");

    userName.textContent = this.nombre;
    userphone.value = this.telefono;
    userEmail.value = this.correo;
    userJob.textContent = this.trabajo;
    userInfo.value = this.info;
  };
}

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
  console.log("holo");
  event.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const trabajo = document.querySelector("#trabajo").value;
  const telefono = document.querySelector("#telefono").value;
  const info = document.querySelector("#aboutme").value;

  const usuario = new Persona(nombre, email, trabajo, telefono, info);

  usuario.imprimirInfo();
});
