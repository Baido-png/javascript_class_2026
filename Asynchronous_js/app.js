

// If statement
// SetTimeout
// SetInterval
// ClearInterval
// Alert
// Decrement operator

let pTag = document.getElementsByTagName('p')[0]

let count = 10

const interval = setInterval(() => {
    count--
    pTag.textContent = count
}, 1000)

setTimeout(() => {
    clearInterval(interval)
    alert("Count-down complete!!!")
    // prompt("Count-down complete!!!")
    // confirm("Count-down complete!!!")
}, 10000)

