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
function validatePassword(password) {
    if (password.length >3 && password.length < 20){
    return true;
    }
} 
  
async function Login(){
      let email = document.querySelector("#result").value;
      let password = document.querySelector("#loginpassword").value;
     
      if (validateEmail(email) && validatePassword(password)) {
          let dbJasonServer = await fetch ("http://localhost:3000/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: `${email}`,
              password: `${password}`,
            }),
          })
console.log (dbJasonServer)
let dbJasonResults = dbJasonServer.json()
if (dbJasonResults.status === 201|| 200){
    window.location = "main.html";
}
      }
      else{
          document.querySelector("#result").style.color="red";

      }
      if (validatePassword(password)) {
              }
              else{
                  document.querySelector("#loginpassword").style.color="red";
                  
              }
  }
 
let carouselPosition = 0;  
const carousel = document.getElementsByClassName("carouselImage");
function carouselShow(position){
    
}