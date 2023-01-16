

window.onload = function() {
    const time = new Date();
    console.log(time.getHours());
    console.log(time.getMinutes());
    console.log(time.getSeconds());

    const hour = document.getElementsByClassName('time hour');
    const min = document.getElementsByClassName('time min');
    const sec = document.getElementsByClassName('time sec');

    hour.innerHTML = time.getHours();
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();


}