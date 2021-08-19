
// NOTE : when I declare and initialize a var with let keyword inside a fucntion, I cannot acess it outside the function
//        when I declare and initialize a var with let keyword outside a fucntion, that function can still acess it,
//        if it cannot find a variable inside itself. 
function removeHandler() {
    document.querySelector('body').removeEventListener('keydown', growOrShrink);
  }

function growOrShrink(event) { 
    if (event.key === "ArrowUp") 
    {
        if(document.getElementById('demo').style.fontSize.substring(0,document.getElementById('demo').style.fontSize.indexOf("p")) < 300)
        {
            document.getElementById('demo').style.fontSize = `${document.getElementById('demo').style.fontSize.substring(0,document.getElementById('demo').style.fontSize.indexOf("p")) * 1.1}px`;
        }
        else
        {
            let para = document.getElementById('demo');
            para.innerText =  '💥';
            para.style.fontSize = '20px';
            removeHandler();
        }
    }
    else if(event.key === "ArrowDown")
    {
        if(document.getElementById('demo').style.fontSize.substring(0,document.getElementById('demo').style.fontSize.indexOf("p")) > 10)
        {
            document.getElementById('demo').style.fontSize = `${document.getElementById('demo').style.fontSize.substring(0,document.getElementById('demo').style.fontSize.indexOf("p")) * 0.9}px`;
        }
        else
        {
            let para = document.getElementById('demo');
            para.innerText =  '💥';
            para.style.fontSize = '20px';
            removeHandler(); 
        }   
    }
    console.log(document.getElementById('demo').style.fontSize);
}

document.querySelector('body').addEventListener("keydown", growOrShrink);


/*
if (ArrowUp)
    if(fonSize < 300)

    else
        explode
        removeHandler()

else if(ArrowDown)
    if(fontSize > 10)

    else
        die 
        removeHandler()

*/
