const hour = document.querySelector('.hour'); // '.time hour'-> error
const min = document.querySelector('.min');   //number of classname => 2
const sec = document.querySelector('.sec');


//// function type
function clock() {
    const now = new Date();

    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();

}

setInterval(clock,1000); //1000 msec = 1 sec


//// Arrow function
// setInterval(()=>{
//     const now = new Date();

//     hour.innerText = now.getHours();
//     min.innerText = now.getMinutes();
//     sec.innerText = now.getSeconds();
// })