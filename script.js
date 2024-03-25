alert("Hello Everyone Touch the screen ")
prompt("Click OK or Cancle To Start")


let body = document.querySelector("body");
body.onclick = function (e) {
  let x = e.pageX - e.target.offsetLeft;
  let y = e.pageY - e.target.offsetTop;
  let splash = document.createElement("span");
  splash.style.left = x + "px";
  splash.style.top = y + "px";


  let  bg =images[Math.floor(Math.random()*10 )]
splash.style.backgroundImage =bg;

  this.appendChild(splash);
  
  setTimeout(() => {
    splash.remove()
  }, 4000);
};

let images =[
    'url("1.png")',
    'url("2.png")',
    'url("3.png")',
    'url("4.png")',
    'url("5.png")',
    'url("6.png")',
    'url("7.png")',
    'url("8.png")',
    'url("9.png")',
    'url("10.png")',
    'url("11.png")',
    'url("12.png")',
    'url("13.png")',
    'url("14.png")',
    'url("15.png")',
]

