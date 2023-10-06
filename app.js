
// setInterval basic 

 // setInterval(function() {
  // document.write("ali")
  // },1000);


  // Counting 1 to no limit 1000 mili seccond speed 1s
  // var a = 0;
//   function time(){
//     a+++
//     document.write(a+" ")
//   }
//   setInterval(time,1000)



// Stop watch Start 

var minutes = 0 
var seconds = 0
var milliseconds = 0
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('msec')

  
// Sec min msec function and start button
function start(){
  interval = setInterval(function(){
  milliseconds++
  getmili.innerHTML = milliseconds
  if(milliseconds >=100){
    seconds++
    getsec.innerHTML = seconds
    milliseconds = 0 
  }
  else if(seconds >=60){
    minutes++
    getmin.innerHTML = minutes
    seconds = 0
  }
  document.getElementById('strt').disabled = true
},10)
}
// Stop button 
function stop(){
  clearInterval(interval)
  document.getElementById('strt').disabled = false
}
// reset button
function reset(){
  minutes = 0 
  seconds = 0 
  milliseconds = 0 
  getmin.innerHTML = 0 
  getsec.innerHTML = 0
  getmili.innerHTML = 0
}