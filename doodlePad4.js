function humanReadable(seconds) {
  let calculatedHours = (seconds) / 3600
  let totalHours = Math.floor(calculatedHours)
  let remainingSeconds = seconds - (totalHours * 3600)

  let calculatedMinutes = remainingSeconds / 60 
  let totalMinutes = Math.floor(calculatedMinutes)
  let totalSeconds = remainingSeconds - (totalMinutes * 60)

  return `${pad(totalHours, 2)}:${pad(totalMinutes, 2)}:${pad(totalSeconds, 2)}`
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

console.log(humanReadable(5))
// 86399 -> 23:59:59
// calculatedHours = (seconds) / 3600 -> 23 hrs
// totalHours = Math.floor(calulated hours)
// remainingSeconds = originalSeconds - (totalHours * 60)

// calculatedMinutes = remainingSeconds / 60 
// totalMinutes = Math.floor(remainingSeconds)
// remainingSeconds2 = remainingSeconds = (totalMinutes * 60)

// calculatedSeconds = remainingSeconds2 /60
// totalSeconds = Math.floor(remainingSeconds)
