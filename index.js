function shout(string)  {
  return string.toUpperCase()
}

function whisper(string)  {
  return string.toLowerCase()
}



function logShout(string) {
  string = string.toUpperCase()
}
const spy = console.log(logShout("hello"))

//console.log(logShout(spy))



function logWhisper(string) {
  console.log(string)
  
}

var lower = "I can't hear you!"
var upper = "YES INDEED!"
var mixed = "I love you, too."

function sayHiToGrandma(string) {
  if(string.toLowerCase() === string) {
    return("I can't hear you!")
  } else if (string.toUpperCase() === string) {
    return("YES INDEED!")
  } else {
    return("I love you, too.")
  }
}