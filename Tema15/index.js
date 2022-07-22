var firstname = "Guiomar";
var lastname = "Bobadilla";
let me = {
    firstname: firstname,
    lastname: lastname
}
//sessionStorage.setItem("yo", JSON.stringify(me));
//localStorage.setItem("yo", JSON.stringify(me));
const now = new Date();
const now_2 = new Date(now.getTime() + 2 * 60000);
var cookie = "yo="+JSON.stringify(me)+";expires="+now_2;
//document.cookie = cookie;