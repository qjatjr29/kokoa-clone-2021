const body=document.querySelector("body");



function paintImg(){
    const image=new Image();
    image.src = "photo/창모.PNG";
    image.classList.add("bgImage");
    body.appendChild(image);
}


function init(){
    paintImg();
}


init();