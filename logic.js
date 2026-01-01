let watch = document.querySelector('.timebox');
let StarBTN = document.querySelector('.Start');
let StopBTN = document.querySelector('.Stop');
let ResetBTN = document.querySelector('.Reset');

// time varible setting for mili second sec minite\
 let milisec= 0;
 let sec = 0;
 let min = 0;
 let TimeId =null;
 StarBTN.addEventListener('click',(e)=>{
    if(TimeId !== null){
        clearInterval(TimeId)
    }

   TimeId = setInterval(starrunningtime,10);

 })


 StopBTN.addEventListener('click',(e)=>{
    clearInterval(TimeId)

 })
        
  


 ResetBTN.addEventListener('click',(e)=>{
    if(TimeId !== null){

        clearInterval(TimeId)
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
