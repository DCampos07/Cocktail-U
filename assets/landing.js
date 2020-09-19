// local storage
var nameInsert = document.getElementById("name");
var emailInsert = document.getElementById("email");



document.getElementById('myform').addEventListener('submit', function(e) {
  e.preventDefault()
  var key = nameInsert.value;
  var value = emailInsert.value;
  
  console.log(key);
  console.log(value);

  

  if (key && value) {
    localStorage.setItem(key, value);
    window.location.href = "main.html"
  }
});

