// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function displaySeconds(time) {
  let secondsResult = {}
  if (time >=  60) {
    return secondsResult = {minutes: 1, seconds: (time % 60)}
  } 
  return secondsResult = {minutes: 0, seconds: time}
}

function displayMinutes(time) {
  let minutesResult = {}
  if (time >= 6000) {
    return minutesResult = {hours: 1, minutes: (time % 6000), seconds: x}
  }
}

console.log(displayMinutes(9999)) // 9999 -> hours: 1, minutes: 39, seconds: 99
                                          // hours: 1, minutes: 40, seconds: 39
console.log(displayMinutes(872))
console.log(displayMinutes(6))
// console.log(72 % 60);


// function displayMinutes(time) {
//   return (time < 1000) ? '0' + time : time;
// }

// function humanReadable(seconds) {
//   let HH = '00';
//   let MM = '00';
//   let SS = '00';
  
//   if (seconds < 60) displaySeconds(seconds);
//   if (seconds < 6000) displayMinutes(seconds);
    
//   else
  
//   return `${HH}:${MM}:${SS}`
// }

// Convert all inputs into 6 digits with extra 0's at the front?


