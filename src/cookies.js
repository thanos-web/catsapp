const btnLogin = document.querySelector(".login__btn");

//document.cookie = "Login=Success";

function controlCookie() {
  if (isCookieExist('Login')) {
    deleteCookie('Login')
    btnLogin.innerText = 'Вход'
  } else {
    document.cookie = "Login=Success";
    btnLogin.innerText = 'Выход'
  }
  
}

btnLogin.addEventListener("click", controlCookie)

function getCookies() {
return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=')
    return { ...acc, [name]: value }
}, {})
}
                       //'Login'
function isCookieExist(cookie) {
                        //'Login'
    return getCookies()[cookie] !== undefined
}

function deleteCookie(key) {
    document.cookie = `${key}=;expires=${new Date(0)}`
  }