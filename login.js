function visiblePassword(){
    var visible = document.getElementById("loginpassword");
    if(visible.type == "password") {
        visible.type = "text";
        document.querySelector(".iconeye").innerHTML= '<i class= "fas fa-eye-slash"></i>';
        return;
    }
    visible.type = "password";
    document.querySelector (".iconeye").innerHTML= '<i class= "fas fa-eye"></i>';
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
/* function validatePassword(password) {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  } */
  function Login(){
      let email = document.querySelector("#result").value;
      let password = document.querySelector("#loginpassword").value;
     
      if (validateEmail(email) && validatePassword(password)) {
console.log ("hola")
      }
      else{
          document.querySelector("#result").style.color="red";
          
      }
  }
  
/* passwordtiene que preguntar si es mayor a 3 y menor a 20 */