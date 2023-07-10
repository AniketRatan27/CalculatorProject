const hourElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmELement = document.getElementById("Ampm");

function UpdateClock(){
    let hour = new Date().getHours();  
    let minute = new Date().getMinutes(); 
    let second = new Date().getSeconds();
    let ampm = "Am";
    
    if(hour > 12){
     hour = hour - 12;
     ampm="Pm";
    } 
    hour= hour < 10 ? "0"+hour : hour;
    minute= minute < 10 ? "0"+ minute : minute;

    hourElement.innerText=hour;   
    minutesElement.innerText=minute;   
    secondsElement.innerText=second;   
    ampmELement,(innerText=ampm);   
    
    setTimeout(()=>{
      UpdateClock();
    },1000)
}
UpdateClock()