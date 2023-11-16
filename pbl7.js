let red = document.getElementById('red');
let orange = document.getElementById('orange');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let navy = document.getElementById('navy');
let purple = document.getElementById('purple');
let pink = document.getElementById('pink');

/*let colorArray = document.querySelectorAll('.colors');

console.log(colorArray);*/

red.addEventListener('click', function() {  
    color = "red";
    selected()
})
orange.addEventListener('click', function() {  
    color = "orange";
    selected()
})
yellow.addEventListener('click', function() {  
    color = "yellow";
    selected()
})
green.addEventListener('click', function() {  
    color = "green";
    selected()
})
blue.addEventListener('click', function() {  
    color = "blue";
    selected()
})
navy.addEventListener('click', function() {  
    color = "navy";
    selected()
})
purple.addEventListener('click', function() {  
    color = "purple";
    selected()
})
pink.addEventListener('click', function() {  
    color = "pink";
    selected()
})

let disp1 = document.querySelector('.c1');
let disp2 = document.querySelector('.c2');

function selected() {
    disp1.style.display = 'none';
    disp2.style.display = 'flex';

    switch (color) {
        case red:
            
            break;
    
        default:
            break;
    }
    console.log(color);
}