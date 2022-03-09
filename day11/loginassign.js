let emailele = document.getElementById("Email")
let passele = document.getElementById("passwordset")
let check = document.getElementById("check")
let err = document.getElementById("error")
let error2 = document.getElementById("error2")
let error3 = document.getElementById("error3")

let storeobj = [{
    email: "chandu@gmail.com",
    password: "Chandu@123"
}, {
    email: "sena@gmail.com",
    password: "Sena@123"
}]

function mailvalidation() {
    error2.textContent = ""
    let emailvalue = emailele.value
    let subs = emailvalue.substring(emailvalue.indexOf('@') + 1);
    if (emailvalue == "") {
        error2.textContent = "Required"
        return false
    } else if (!emailvalue.includes('@') || subs == '') {
        error2.textContent = "Please enter correct Email"
        return false
    } else {
        error2.textContent = ""
        return true
    }
}

function passvalidation() {
    error3.textContent = ""
    let passvalue = passele.value
    let pass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})")
    if (passvalue == "") {
        error3.textContent = "Required"
        return false
    } else if (!pass.test(passvalue)) {
        error3.textContent = "Enter correct passowrd"
        return false
    } else {
        error3.textContent = ""
        return true
    }
}

function logindata() {
    let s1 = mailvalidation()
    let s2 = passvalidation()
    if (s1 && s2) {
        s3 = check_total()
    }
    return s1 && s2 && s3
}

function check_total() {
    err.textContent = ""
    let checkval = storeobj.some(each => each.email == emailele.value && each.password == passele.value)
    if (checkval) {
        return true
    } else {
        err.textContent = "Email or Password is incorrect"
        return false
    }
}

function check_mail_pass() {
    let newval = storeobj.some(each => each.email == emailele.value && each.password == passele.value)
    if (check.checked && newval) {
        newObj = {
            email: emailele.value,
            password: passele.value
        }
    } else {
        newObj = {
            email: "",
            password: ""
        }
    }
}

function on_submiting() {
    localStorage.setItem("setObj", JSON.stringify(newObj))

}

let h1 = localStorage.getItem("setObj")
let p1 = JSON.parse(h1)
emailele.value = p1.email;
passele.value = p1.password