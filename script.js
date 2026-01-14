let btn = document.getElementById('btn')
let body = document.getElementById('body')
let code = document.getElementById('code')
let colors = "0123456789ABCDEF";
let length = 6;

btn.addEventListener('click',()=>{
    let color = "#"
    for (let i = 0 ; i<length;i++){
        let randomIndex =Math.floor(Math.random()*colors.length);
       color = color + colors[randomIndex];
    }
   document.body.style.backgroundColor=color;
   code.innerHTML="HEX Code:"+ color
})
