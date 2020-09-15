let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ',buttonText);
        if(buttonText=='π'){
            screenValue+=Math.PI;
            screen.value = screenValue;
        }
        else if(buttonText=='e'){
            screenValue+=2.7182818284590452353602874713527;
            screen.value = screenValue;
        }
        else if(buttonText=='<='){
            screenValue = screenValue.slice(0,screenValue.length-1);
            screen.value = screenValue;
        }
        else if(buttonText=='ln'){
            screenValue= Math.log(screenValue);
            screen.value = screenValue;
        }
        
        else if(buttonText=='C'){
            screenValue = "";
            screen.value = "";
        }
        else if(buttonText=="="){
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }
    })
} 