let myimage = document.querySelector('img') ;

myimage.onclick = function(){

    let src = myimage.getAttribute('src') ;

    if(src == './images/logo.png'){
        myimage.setAttribute('src','./images/logo2.png');
    }else{
        myimage.setAttribute('src','./images/logo.png');

    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

myButton.onclick = function(){
    
        getUserName();
        setUserName();
    
}

function setUserName(){

    let name = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${name}`;
}

function getUserName(){
    let name = prompt('please enter your name');
    while(!name){name = prompt('please enter a proper name')}

    localStorage.setItem('name',name);
}

if(localStorage.getItem('name')){
    setUserName();
}else{
    getUserName();
    setUserName();
}