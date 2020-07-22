
export function setCookie(key, value) {
    let expires = new Date();
    expires.setTime(expires.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

export function getCookie(key) {
    let keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

export function deleteCookie(key) {
    document.cookie = key + "=" + "" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
}

const Cookie = {
    setCookie,
    getCookie,
    deleteCookie,
}

export default Cookie
