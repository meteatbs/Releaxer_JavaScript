const contaier=document.getElementById('container');
const text=document.getElementById('text');


const totalTime=7500;
const breathTime=(totalTime/5)*2;
const holdTime=totalTime/5;


breatheAnimation();

function breatheAnimation() {
    text.innerText='Breathe In';
    contaier.className='container grow';

    setTimeout(()=>{
        text.innerText='Hold';

        setTimeout(()=>{
            text.innerText='Breathe Out';
            contaier.className='container shrink';
        },holdTime);
    },breathTime);
}

setInterval(breatheAnimation,totalTime);