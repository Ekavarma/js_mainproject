let input=document.getElementById("pswd")
let icon=document.getElementById("ic")
icon.onclick = function (){
    if(input.type ==="password"){
        input.type="text"
        icon.className="fa-solid fa-eye"
    }
    else{
        input.type="password"
        icon.className="fa-solid fa-eye-slash"
    }
}


let login=document.getElementById("login")

login.addEventListener("submit",(e)=>{
    e.preventDefault()
    let inputemail=document.getElementById("email").value.trim()
    let inputpswd=document.getElementById("pswd").value.trim()
    let alluserdata=JSON.parse(localStorage.getItem("details"))
    if( data=alluserdata.find(x=>x.email===inputemail && x.pswd===inputpswd)){
        alert("login succesfully!")
        window.location.href="../homepage/html.html"

    }else{
        alert("wrong credentials. Please try again")


    }
   
})
