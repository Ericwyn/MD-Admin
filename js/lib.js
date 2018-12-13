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

function ajax_post(url, params, success_callback, fail_callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    let formData = new FormData();
    if (params !== null) {
        for (let i = 0; i < params.length; i++) {
            formData.append(params[i][0],params[i][1])
        }
        xhr.send(formData);
    } else {
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success_callback(xhr.responseText)
            } else {
                fail_callback(xhr.status)
            }
        }
    }
}
