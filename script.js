let hr = 0, min = 0, sec = 0, count = 0;
let timer = false;

const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

startbtn.addEventListener('click', ()=>{
    timer = true;
    stopwatch();
});

stopbtn.addEventListener('click',()=>{
    timer = false;
    
});

resetbtn.addEventListener('click', ()=> {
    timer = false;
    hr = min = sec = count = 0;
    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('count').innerHTML = '00';
});

function stopwatch(){
    if (timer) {
        count++;
        if (count === 100) {
            sec++;
            count = 0
        }
        if (sec === 60){
            min++;
            sec = 0;
        }
        if(min === 60){
            hr++;
            min = 0;
            sec = 0;
        }

        let hrstring = hr;
        let minString = min;
        let secString = sec;
        let countstring = count;

        if (hr<10) hrstring = '0' + hrstring;
        if (min<10) minString = '0' + minString;
        if (sec<10) secString = '0' + secString;
        if (count < 10) countstring = '0' + countstring;

        document.getElementById('hr').innerHTML = hrstring;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countstring;

        setTimeout(stopwatch, 10);
    }
}