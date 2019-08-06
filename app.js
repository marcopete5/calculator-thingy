let clearRow = document.querySelectorAll('.clearBtns');
let operatorBtns = document.querySelectorAll('.operatorBtns')
let nums = document.querySelectorAll('.numBtns')
let display = document.querySelector('.display')
let clear = document.querySelector('.clear')
let plusMinus = document.querySelector('.plusMinus')
let hundredth = document.querySelector('.hundredth')
let divide = document.querySelector('.divide')
let multiply = document.querySelector('.multiply')
let subtract = document.querySelector('.subtract')
let add = document.querySelector('.add')
let equate = document.querySelector('.equate')

let first = true;
let firstClear = true;
const operators = {
    dividing: false,
    multiplying: false,
    adding: false,
    subtracting: false,
}

let firstNum = 0;
let current = 0;



clearRow.forEach(btn => {
    btn.addEventListener('mousedown', ()=>{
        btn.style.backgroundColor = '#777777';
    })
    btn.addEventListener('mouseup', ()=>{
        btn.style.backgroundColor = '#545454';
    })
})

operatorBtns.forEach(btn => {
    btn.addEventListener('mousedown', ()=>{
        btn.style.backgroundColor = 'rgb(188, 110, 0)';
    })
    btn.addEventListener('mouseup', ()=>{
        btn.style.backgroundColor = '#ff9500';
    })
})

nums.forEach(btn => {
    btn.addEventListener('mousedown', ()=>{
        clear.textContent = "C";
        btn.style.backgroundColor = '#d4d4d2';
        if(first) {
            display.textContent = btn.textContent
            first = false;
        }else{
            display.textContent += btn.textContent;
        }
        current = +display.textContent
    })
    btn.addEventListener('mouseup', ()=>{
        btn.style.backgroundColor = '#777777';
    })
    
})

clear.addEventListener('click', () => {
    if(firstClear) {
        firstClear = false;
        first = true;
    }else {
        firstNum = 0;
    }
    clear.textContent = 'AC';
    current = 0;
    display.textContent = current;
})

plusMinus.addEventListener('click', () => {
    current = display.textContent
    current = current < 0 ? Math.abs(current) : -Math.abs(current)
    display.textContent = current
})

hundredth.addEventListener('click', () => {
    display.textContent = current * .01
    current = display.textContent
})

divide.addEventListener('click', () => {
    if (firstNum === 0){
        firstNum = +current
    }
    for (action in operators){
        if(action){
            operators[action] = false
        }
    }
    operators.dividing = true;
    first = true;
    console.log(firstNum)
})

multiply.addEventListener('click', () => {
    if (firstNum === 0){
        firstNum = +current
    }
    for (action in operators){
        if(action){
            operators[action] = false
        }
    }
    operators.multiplying = true;
    first = true;
    console.log(firstNum)
})

subtract.addEventListener('click', () => {
    if (firstNum === 0){
        firstNum = +current
    }
    for (action in operators){
        if(action){
            operators[action] = false
        }
    }
    operators.subtracting = true;
    first = true;
    console.log(firstNum)
})

add.addEventListener('click', () => {
    if (firstNum === 0){
        firstNum = +current
    }
    for (action in operators){
        if(action){
            operators[action] = false
        }
    }
    operators.adding = true;
    first = true;
    
})

equate.addEventListener('click', () => {
    for (action in operators){
        if(operators[action]){
            switch(action){
                case 'adding':
                    display.textContent = +firstNum + +current;
                    firstNum += current;
                    first = true;
                    operators[action] = false;
                    break;
                case 'subtracting':
                    display.textContent = +firstNum - +current;
                    firstNum += current;
                    first = true;
                    operators[action] = false;
                    break;
                case 'dividing':
                    display.textContent = +firstNum / +current;
                    firstNum += current;
                    first = true;
                    operators[action] = false;
                    break;
                case 'multiplying':
                    display.textContent = +firstNum * +current;
                    firstNum += current;
                    first = true;
                    operators[action] = false;
                    break;
                default:
                    display.textContent = 0;
            }
        }
    }
    console.log(firstNum)
})