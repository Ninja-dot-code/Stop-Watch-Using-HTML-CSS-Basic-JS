let watch = document.querySelector('.timebox');
let star = document.querySelector('.Start');
let Stop = document.querySelector('.Stop');
let reset = document.querySelector('.Reset');

// time varible setting for mili second sec minite\
 let milisec= 0;
 let sec = 0;
 let min = 0;
 let timeid =null;
 star.addEventListener('click',(e)=>{
    if(timeid !== null){
        clearInterval(timeid)
    }

   timeid = setInterval(starrunningtime,10);

 })


 Stop.addEventListener('click',(e)=>{
    clearInterval(timeid)

 })
        
  


 reset.addEventListener('click',(e)=>{
    if(timeid !== null){
        clearInterval(timeid)
        min =0; sec = 0; milisec = 0;
        watch.textContent = `00 : 00 : 00`
        
    }
 

 })



 function starrunningtime(){
    milisec++;
    if(milisec == 100 ){
        milisec=0;
        sec++;
        if(sec == 60 ){
            sec=0;
            min++;


        }
       
    }
     
    let milistring = milisec < 10? `0${milisec}`:milisec;
    let secstring = sec < 10 ? `0${sec}` :sec;
    let minstring = min < 10 ? `0${min}` :min;
    watch.textContent = `${minstring} : ${secstring} : ${milistring}`

 }
