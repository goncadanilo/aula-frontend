const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const gender = document.getElementById("gender");

function submit() {
  const id = localStorage.length + 1;

  const user =
    id + ";" +
    name.value + ";" +
    email.value + ";" +
    age.value + ";" +
    gender.value;

  localStorage.setItem(id, user);
  alert("Usuário Salvo");

  clear();
}

function clear() {
  name.value = "";
  email.value = "";
  age.value = "";
  gender.value = "";

  window.location.href = "/index.html";
}
