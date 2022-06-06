const tempLoad=()=>{
    let temp=document.getElementById("thermometer")
    let tempNum=document.getElementById("tempNum")
    let tempAlert=document.getElementById("tempAlert")
    setTimeout(()=>{
        temp.innerHTML="&#xf2cb";
        tempNum.innerHTML="0'C"
        temp.style.color="skyblue";
        tempNum.style.color="skyblue";
        tempAlert.innerHTML="";
    },0000)
    setTimeout(()=>{
        temp.innerHTML="&#xf2ca";
        tempNum.innerHTML="25'C"
        temp.style.color="blue";
        tempNum.style.color="blue";
    },1000)
    setTimeout(()=>{
        temp.innerHTML="&#xf2c9";
        tempNum.innerHTML="50'C"
        temp.style.color="green";        
        tempNum.style.color="green";
    },2000)
    setTimeout(()=>{
        temp.innerHTML="&#xf2c8";
        tempNum.innerHTML="75'C"
        temp.style.color="orange";
        tempNum.style.color="orange";
    },3000)
    setTimeout(()=>{
        temp.innerHTML="&#xf2c7";
        tempNum.innerHTML="100'C";
        temp.style.color="red";
        tempNum.style.color="red";
        tempAlert.innerHTML="Alert! Temperature is too Hot.";
        tempAlert.style.color="red";
    },4000)
}
tempLoad()
setInterval(tempLoad,6000);