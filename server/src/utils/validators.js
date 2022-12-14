export const isValidName=function(name){
    if(/^[A-Za-z]+$/.test(name))return true
    else return false
}

export const isValidPhone=function(num){
    if(/^[6789][0-9]{9}$/.test(num))return true
    else return false
}

export const isValidEmail=function(email){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))return true
    else return false
}