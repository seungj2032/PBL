let orange = document.getElementById('orange');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');
let navy = document.getElementById('navy');
let purple = document.getElementById('purple');
let pink = document.getElementById('pink');

var c1 = document.querySelector('.c1');
var c2 = document.querySelector('.c2');
var res_wall = document.querySelector('.res_wall');
var res_merge = document.querySelector('.res_merge');
var c3 = document.querySelector('.c3');

var res_color = document.querySelector('.res_color');

let textColor = document.querySelectorAll('.text_color');
let colorArray = ["orange", "yellow", "blue", 
                  "navy", "purple", "pink"];

orange.addEventListener('click', function() {  
    color = "orange";
    selected()
})
yellow.addEventListener('click', function() {  
    color = "yellow";
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

var split1 = document.querySelectorAll('.split1');
var split2 = document.querySelectorAll('.split2');

function selected() {
    let colorNumebr = 0;
    let text = "";

    for(i=0;i<6;i++){
        if(color==colorArray[i]){
            colorNumebr += 1;
            break;
        } else {
            colorNumebr += 1;
        }
    }
    
    for(i=0;i<split1.length;i++){
        split1[i].classList.remove("split1");
        split2[i].classList.remove("split2");
    }
    res_color.classList.remove("res_color");

    switch (colorNumebr) {
        case 1:
            text="주황"; 
            for(i=0;i<split1.length;i++){
                split1[i].classList.add("split1");
                split2[i].classList.add("split2");
            }
            res_color.classList.add("res_color");
            break;
        case 2:
            text="노랑"; 

            for(i=0;i<split1.length;i++){
                split1[i].classList.add("yellow_merge1");
                split2[i].classList.add("yellow_merge2");
            }

            res_color.classList.add("res_color_yellow");
            break;
        case 3:
            text="하늘"; 

            for(i=0;i<split1.length;i++){
                split1[i].classList.add("blue_merge1");
                split2[i].classList.add("blue_merge2");
            }
            res_color.classList.add("res_color_blue");
            break;
        case 4:
            text="남"; 
            for(i=0;i<split1.length;i++){
                split1[i].classList.add("navy_merge1");
                split2[i].classList.add("navy_merge2");
            }
            res_color.classList.add("res_color_navy");
            break;
        case 5:
            text="보라"; 
            for(i=0;i<split1.length;i++){
                split1[i].classList.add("purple_merge1");
                split2[i].classList.add("purple_merge2");
            }
            res_color.classList.add("res_color_purple");
            break;
        case 6:
            text="분홍"; 
            for(i=0;i<split1.length;i++){
                split1[i].classList.add("pink_merge1");
                split2[i].classList.add("pink_merge2");
            }
            res_color.classList.add("res_color_pink");
            break;
        default:
            alert("제대로 색상을 선택해주세요.");
            break;
    }

    c1.style.display = 'none';
    c2.style.display = 'flex';

    for(i=0;i<textColor.length;i++){
        textColor[i].innerText = text;
        if(color=="blue")
            textColor[i].style.color = "skyblue";
        else
            textColor[i].style.color = color;
    }
}

var aisle = document.getElementById('aisle');
var wall = document.getElementById('wall');

wall.addEventListener('click', function(){
    c2.style.display = 'none';
    res_wall.style.display = 'flex';
})
aisle.addEventListener('click', function(){
    c2.style.display = 'none';
    res_merge.style.display = 'flex';
})

res_merge.addEventListener('click',function(){
    res_merge.style.display = 'none';
    c3.style.display = 'flex';
})

function sign(){
    alert("동참해주셔서 감사합니다.");
}