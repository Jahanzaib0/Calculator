let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let lastpress = document.getElementById("lastpress");
buttons.map( button => {

    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
                
            case '=':
                try{
                //   display.innerText = eval(display.innerText);
                  let numericalExpression = display.innerText;
                  let result = eval(numericalExpression);
                  display.innerText = result;
                } 
                catch {
                    display.innerText = "Error"
                }
                break;  
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                case lastpress:
                    if (result + 1) {
                        display.innerText = "";
                    }      
                break; 
            default:
                display.innerText += e.target.innerText;
                }            
            }); 
        });
        

        