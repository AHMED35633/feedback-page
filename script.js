const btn = document.getElementById("button")
const textArea = document.getElementById("textarea")
const text = document.getElementById("text")
const email = document.getElementById("email")

btn.addEventListener("click" , Check)
function Check(){
    if(textArea.value=="" || text.value=="" || email.value==""){
        alert(" -please fill all form ")
    }
}

