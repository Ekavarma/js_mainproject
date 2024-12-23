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



let signup = document.getElementById("signup")
signup.addEventListener("submit", (e) => {
    e.preventDefault()

    let rename = /^[a-zA-Z]{3,}$/
    let regEmail = /^[a-zA-Z0-9%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    let regpassword = /^[a-zA-Z0-9!@#$%&*]{8,15}$/
    let a = document.getElementById("name").value.trim()
    let b = document.getElementById("email").value.trim()
    let c = document.getElementById("pswd").value.trim()
    let Nameerror = document.getElementById("nameerror")
    let Emailerror = document.getElementById("emailerror")

    let Pswderror = document.getElementById("pswderror")

    let isvalidate = true


    if (!rename.test(a)) {
        Nameerror.textContent = "please enter atleast 4 characters"
        isvalidate = false
    }
    else{
        Nameerror.textContent =" "

    }
    if (!regEmail.test(b)) {
        Emailerror.textContent = "please enter valid email"
        isvalidate = false

    }else{
        Emailerror.textContent =" "
    }
    if (!regpassword.test(c)) {
        Pswderror.textContent = "please enter atlesat 8 characters"
        isvalidate = false

    }else{
        Pswderror.textContent =" "
    }
    if (isvalidate) {
        let userdata = JSON.parse(localStorage.getItem("details")) || []
    userdata.push({ name: a, email: b, pswd: c })
    localStorage.setItem("details", JSON.stringify(userdata))
    console.log("details")

    window.location.href = "../login/login.html"

}
    

}

    // else{
    //     window.location.href="./signup.html"
    //     alert("enter all fields")
    // }

)


























