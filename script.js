
// const btn = document.getElementById("btn");

document.getElementById("btn").addEventListener("click",()=>{
    let result = document.getElementById("result");
    let selectOp = document.getElementById("selectOp").value;
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    
    switch(selectOp){
        case "plus":
            result.innerHTML = Number(num1) + Number(num2);
            break;
        case "minus":
            result.innerHTML = Number(num1) - Number(num2);
            break;
        case "div":
            result.innerHTML = Number(num1) / Number(num2);
            break;
        case "multiply":
            result.innerHTML = Number(num1) * Number(num2);
            break;
        
    }
})
