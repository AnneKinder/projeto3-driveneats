function highlight1(){
    document.getElementById('frango-c').style.border = "4px solid green";
  
}

function highlight2(){

    document.getElementById('moqueca-c').style.border = "4px solid green";

}

function highlight3(){

    document.getElementById('yakissoba-c').style.border = "4px solid green";
  
}

function highlight4(){
    document.getElementById('pepsi-c').style.border = "4px solid green";
  
}

function highlight5(){

    document.getElementById('coca-c').style.border = "4px solid green";
 
}

function highlight6(){

    document.getElementById('agua-c').style.border = "4px solid green";
 
}


function highlight7(){
    document.getElementById('tiramisu-c').style.border = "4px solid green";
  
}

function highlight8(){

    document.getElementById('pudim-c').style.border = "4px solid green";
 
}

function highlight9(){

    document.getElementById('brigadeiro-c').style.border = "4px solid green";
 
}

function fecharpedido (){
    document.getElementById('popup').style.display = 'block';

}

const button= document.querySelector ('button')
const popup= document.querySelector ('.popup-wrapper')
button.addEventListener('click', () => {
    popup.style.display= 'block';
})