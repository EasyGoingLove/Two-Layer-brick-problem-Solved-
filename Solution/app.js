let inputBoxes = 1;
const mainBtn = document.querySelector('.mainBtn');
      mainBtn.addEventListener('click', () =>{
        choice();
      },{once : true});

const choice = () => {

    const divBox = document.querySelector('.choiceBox');
    const buttonAuto = document.createElement("button");
    const buttonManual = document.createElement("button");

    buttonAuto.innerHTML = 'Automated Input';
    buttonManual.innerHTML = 'Manual Input';

    buttonAuto.className = "btnAut"; 
    buttonManual.className = "btnMan"; 

    divBox.appendChild(buttonAuto); 
    divBox.appendChild(buttonManual); 

    buttonManual.addEventListener('click' , ()=>{
        createTable();
    }, {once : true});
    
    buttonAuto.addEventListener('click' , ()=>{
        const value_N = document.getElementById('N').value;
        const value_M = document.getElementById('M').value;
        if(value_N % 2 ===0  && value_M%2  ===0 && value_N <=100
            &&  value_M <=100 && value_N >=2 && value_M >=2){
                inputBoxes = (value_N*value_M)/2;
                autodrawBricks();
            }
            else{
                alert('The Input you have entered is not Valid.');
                window.location.reload();
            }
      
    }, {once : true});
}


const createTable = () => {
       const table = document.getElementById('table');
       const value_N = document.getElementById('N').value;
       const value_M = document.getElementById('M').value;

        inputBoxes = (value_N*value_M)/2;
       
        
       const h2_one =  document.createElement('h2');
       h2_one.innerHTML="Layer One";
       table.appendChild(h2_one);
       if(value_N % 2 ===0  && value_M%2  ===0 && value_N <=100
         &&  value_M <=100 && value_N >=2 && value_M >=2){

       for(let i = 0 ; i < inputBoxes; i++){
       const input = document.createElement("input");

          if(i === inputBoxes/2){
            const br = document.createElement("br");
            const h2_two =  document.createElement('h2');
            table.appendChild(br);
            h2_two.innerHTML="Layer Two";
            table.appendChild(h2_two);
          }

            input.type = "text";
            input.pattern ="[0-9]" ;
            if(inputBoxes >= 10){input.maxLength = "5";}
            else{input.maxLength = "3";}
            input.className = "inputs_N_M"; 
            input.addEventListener('keyup', inputText);
            table.appendChild(input); 
       }
       document.querySelector('.manualBtn').style.display = "block";
     console.log(value_N , value_M);
    }else {
        alert('The Input you have entered is not Valid.');
        window.location.reload();
    }
    
  }


const inputText = () => {
    table.onkeyup = (e) =>{

         let target = e.srcElement;
         let maxLength = parseInt(target.attributes["maxlength"].value, 10);
         let myLength = target.value.length;

         if(inputBoxes >= 10){
            if(myLength===2){target.value += `  ${target.value}`};
         }
         else{ 
             if(myLength===1){target.value += `  ${target.value}`};
         }

        if (myLength >= maxLength) {
            let next = target;
            while (next = next.nextElementSibling) {
                if (next == null)
                    break;
                if (next.tagName.toLowerCase() == "input") {
                    next.focus();
                    break;
                }
            }
        }
    } 
}

const autodrawBricks = () => {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);
    let x=70;
    let xNum= 30;
    let areaBlocks = 0 ;

    for (let i = 1; i <= inputBoxes/4; i++) {
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "red";
        ctx.rect(x, 20, 100, 50);
        ctx.stroke();

        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(areaBlocks +1, xNum+50, 55);

        ctx.font = "30px Arial";
        ctx.fillText(areaBlocks+1, xNum+100, 55);

        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "red";
        ctx.rect(x-55, 20, 50, 100);
        ctx.stroke();

        ctx.font = "30px Arial";
        ctx.fillText(areaBlocks+2, xNum, 50);

        ctx.font = "30px Arial";
        ctx.fillText(areaBlocks+2, xNum, 110);

        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "green";
        ctx.rect(x, 70, 100, 50);
        ctx.stroke();

        ctx.font = "30px Arial";
        ctx.fillText(areaBlocks+3, xNum+50, 110);

        ctx.font = "30px Arial";
        ctx.fillText(areaBlocks+3, xNum+100, 110);
    
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "green";
        ctx.rect(x+105, 20, 50, 100);
        ctx.stroke();

        ctx.font = "30px Arial";
        ctx.fillText(areaBlocks+4, xNum+160, 50);

        ctx.font = "30px Arial";
        ctx.fillText(areaBlocks+4, xNum+160, 110);

        x+=215;
        xNum+=215;
        areaBlocks+=4;
    }
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Layer One", 100, 150);

    ctx.font = "30px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Layer Two", 400, 150);


}

const manualBtn = document.querySelector('.manualBtn');
manualBtn.addEventListener('click', () =>{

    const manualInputs = document.querySelectorAll('input');
    console.log(manualInputs[3].value);

    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);
    let x=70;
    let xNum= 30;
    

    for (let i = 2; i <= (inputBoxes/4)+1; i++) {
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "red";
        ctx.rect(x, 20, 100, 50);
        ctx.stroke();

        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(manualInputs[i].value.charAt(0), xNum+50, 55);

        ctx.font = "30px Arial";
        ctx.fillText(manualInputs[i].value.charAt(0), xNum+100, 55);

        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "red";
        ctx.rect(x-55, 20, 50, 100);
        ctx.stroke();

        ctx.font = "30px Arial";
        ctx.fillText(manualInputs[i+1].value.charAt(0), xNum, 50);

        ctx.font = "30px Arial";
        ctx.fillText(manualInputs[i+1].value.charAt(0), xNum, 110);

        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "green";
        ctx.rect(x, 70, 100, 50);
        ctx.stroke();

        ctx.font = "30px Arial";
        ctx.fillText(manualInputs[i+2].value.charAt(0), xNum+50, 110);

        ctx.font = "30px Arial";
        ctx.fillText(manualInputs[i+2].value.charAt(0), xNum+100, 110);
    
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "green";
        ctx.rect(x+105, 20, 50, 100);
        ctx.stroke();

        ctx.font = "30px Arial";
        ctx.fillText(manualInputs[i+3].value.charAt(0), xNum+160, 50);

        ctx.font = "30px Arial";
        ctx.fillText(manualInputs[i+3].value.charAt(0), xNum+160, 110);

        x+=215;
        xNum+=215;
        
    }
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Layer One", 100, 150);

    ctx.font = "30px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Layer Two", 400, 150);
})





const mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

const scrollFunction =() =>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
