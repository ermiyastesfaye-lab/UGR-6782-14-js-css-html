let  like = document.getElementsByClassName("fa-solid fa-heart")
for(let i = 0; i < like.length; i++){
        like[i].onclick = function(){
            let computedColor = window.getComputedStyle(like[i]).color;
            if (computedColor === "rgb(185, 188, 194)"){
                this.style.color = "red"
            }
            else if(computedColor === "rgb(255, 0, 0)"){
                this.style.color = "rgb(185, 188, 194)" 
            }
        }
    }

let form = document.querySelector('.container__form')
let send = document.querySelector("#submit");
let nam = document.querySelector("#name")
let email = document.querySelector("#email")
let mess = document.querySelector("#message")


function validateForm() {
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
    let isValid = true;

    if (nam.value.trim() === '') {
      nameError.style.display = 'block';
      isValid = false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      emailError.style.display = 'block';
      isValid = false;
    }

    if (mess.value.trim() === '') {
      messageError.style.display = 'block';
      isValid = false;
    }

    return isValid;
  }

send.onclick = function(){
    if (validateForm()){
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ermiyastesfaye16@gmail.com",
            Password: "EEEA7E8D9176888DDB1B396B1E10026EAE76",
            To: 'ermiyastesfaye16@gmail.com',
            From: "ermiyastesfaye16@gmail.com",
            Subject: "Contact Form",
            Body: "Name: " + nam.value + "<br>" + "Email: " + email.value + "<br>" + "Body: " + mess.value
        }).then(
            message => {
                if(message == "OK"){
                    Swal.fire({
                        title: "Sucsess!",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                }
            }
        );
    }
}



function showSidebar(){
    let open_m = document.getElementById("open-menu")
    let sidebar = document.querySelector(".my__sidebar")
    open_m.style.display = "none"
    sidebar.style.display = "flex"
}
function hideSidebar(){
    let open_m = document.getElementById("open-menu")
    let sidebar = document.querySelector(".my__sidebar")
    sidebar.style.display = "none"
    open_m.style.display = "flex"
}
