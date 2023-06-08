// function randIds(min,max){
//     let range = {min: min, max: max}
//     let delta = range.max - range.min
//     return Math.round(range.min + Math.random() * delta)
// }
// if (document.cookie.indexOf("cart") < 0) {
//     setCookie('cart', randIds(100000000,900000000))
// }else{
    
// }
// function setCookie(name, value) {
//     let cookie = `${name}=${value}`
//     document.cookie = cookie;
// }

// if (document.cookie.indexOf("session") < 0) {
//     setCookie('session', randIds(100000000,900000000))
// }
// function readCookie(cname) {
//     var name = cname + "=";
//     var decoded_cookie = decodeURIComponent(document.cookie);
//     var carr = decoded_cookie.split(';');

//     for(var i=0; i<carr.length;i++){
//         var c = carr[i];


//         while(c.charAt(0) == ' '){
//             c=c.substring(1)
//         }
//         if(c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length)
//         }
//     }
//     return "";
// }