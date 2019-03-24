function shout(string)  {
  return string.toUpperCase()
}

function whisper(string)  {
  return string.toLowerCase()
}


//const spy2 = logWhisper.spy()



function logShout(string) {
  const spy = string.toUpperCase
//const spy = console.log(string1)
}

console.log(logShout(spy))



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