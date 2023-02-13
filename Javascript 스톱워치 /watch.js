let sec=0;
let mili=0;
let intervalId;

const appSec=document.getElementById('sec');
const appMili=document.getElementById('mili');
const btnStart=document.getElementById('btn-start');
const btnStop=document.getElementById('btn-stop');
const btnReset=document.getElementById('btn-reset');

const btn_delete=document.getElementById('del');
const btn_all=document.getElementById('all');



btnStart.onclick=function(){
    clearInterval(intervalId);
    intervalId=setInterval(timerstart,10)
}

btnStop.onclick=()=>{
    clearInterval(intervalId);
    timePlus();
}

btnReset.onclick=()=>{
    clearInterval(intervalId);
    mili=0;
    sec=0;

    appSec.innerText="00";
    appMili.innerText="00";
}

btn_delete.onclick=()=>{
    selectDelete();
    btn_all.checked = false;
}

btn_all.onclick=()=>{
    var li=document.getElementById('lap');
    for (var i=1; i<=li.children.length; i++)
    {
        li.childNodes[i].firstChild.checked = true;
    }
}



function timerstart(){
    mili++
    appMili.textContent=String(mili).padStart(2.0);

    if (mili>99){
        sec++;
        appSec.textContent=String(sec).padStart(2,0);
        mili=0;
        appMili="00";
    }
}

function timePlus(){
    var div = document.createElement("div");
    var at=document.createElement ("span");
    var chkbox = document.createElement("input");
    div.style = "width:100%;";
    chkbox.type = "checkbox";

    at.innerHTML=String(sec).padStart(2,0)+":"+String(mili).padStart(2,0);

    div.appendChild(chkbox);
    div.appendChild(at);

    document.querySelector('#lap').appendChild(div);

}

function delAll(){
    var li = document.getElementById('lap');
        while(li.firstChild ){
        li.removeChild(li.firstChild );
      }

}

function selectDelete(){
    var li=document.getElementById('lap');
    console.log(li.childNodes)
    for (var i=1; i<=li.children.length; i++)
    {
        if (li.childNodes[i].firstChild.checked) {
            li.removeChild(li.childNodes[i]);
            i--;
        }
    }
       // if(i.input.checked) li.removeChild(checkbox3[i.parentNode.parentNode]);

}