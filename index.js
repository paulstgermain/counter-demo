function add(){
    let num = document.querySelector('#counter').innerHTML;
    num++
    document.querySelector('#counter').innerHTML = num;
}

function createButton(buttonText, classes){
    const button = document.createElement('button');

    button.innerText = buttonText;
    
    button.addEventListener('click', add );

    if(classes){
        for(let i = 0; i < classes.length; i++){
            button.classList.add(classes[i]);
        }
    }
    return button;
}

let left = document.querySelector('.block1');

let button = createButton('Press Me', ['frames', 'button']);

left.appendChild(button);