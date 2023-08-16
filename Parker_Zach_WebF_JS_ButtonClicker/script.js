function loggedIn(element)
{
    // console.log("element clicked",element);
    if(element.innerText =="Login")
    {
        element.innerText = "Logout";
    }
    else{
        element.innerText = "Login";
    }
}
function defHide(element)
{
    element.style.display="none";
}
function likeUp(id){
    var element = document.querySelector(`#${id}`)
    console.log(element);
    element.innerText++;
}
