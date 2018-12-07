// 一些 js 工具

// token 的 key
let tokenKey = "token";

function domId(domName) {
    return document.getElementById(domName);
}

function mduiAlert(msg) {
    mdui.alert(msg)
}

function clog(msg) {
    console.log(msg)
}

function domTag(tagName) {
    return document.getElementsByTagName(tagName);
}

// 从 sessionStorage 里面获取 token
function getToken() {
    return sessionStorage.getItem(tokenKey);
}

function setToken(token) {
    return sessionStorage.setItem(tokenKey,token);
}