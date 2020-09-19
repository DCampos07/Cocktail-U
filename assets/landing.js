// local storage
var nameInsert = document.getElementById("name");
var emailInsert = document.getElementById("email");
var btnInsert = document.getElementById("btn");

btnInsert.onclick = function () {
  var key = nameInsert.value;
  var value = emailInsert.value;

  console.log(key);
  console.log(value);

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
};

// when submit enters main page
function myOnClickFn(event) {
  event.preventDefault();
  document.location.replace = "./main.html";
}
