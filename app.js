/* FROOM THE PROOJECT */


//PROJECT1

const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');


//Phone menu

document.getElementById("mobile-menu").addEventListener("click", function() {
  document.querySelector(".navbar__menu").classList.toggle("active")
} )

// Add event listener
closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
});

//PROJECT2

let data = [
    {
        name: 'Drawing',
        age: '1',
    },
    {
        name: 'Random Projects',
        age: '2',
    },
    {
        name: 'Fallout',
        age: '3',
    },
    {
        name: 'Live in Hell',
        age: '4',
    },
];

const info = document.querySelector('#info')

let details = data.map(function (item){
 return '<div>' + item.age + ' ' + '-' + item.name  + '</div>';
});

//PROJECT3

info.innerHTML = details.join('\n');

const circle = document.querySelector('#circle')

circle.addEventListener('mouseenter', () => {
    if(!circle.classList.contains('hover')){
        circle.classList.add('hover');}
});

circle.addEventListener('mouseleave',() => {
  if(circle.classList.contains('hover')){
  circle.classList.remove('hover');}
});


//IMG CLICK honk


function change1(){
    document.getElementById('pic').src='/gallery/honk b.png';}

function change2(){
        document.getElementById('pic').src='/gallery/honk.png';}



        
//sep 2022 QnA

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

