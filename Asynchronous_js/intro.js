// console.log("start")
// console.log("in between")
// console.log("end")

// console.log("start")

// setTimeout(() => {
//     console.log("in between")
// }, 5000)

// console.log("end")


const interval = setInterval(() => {
    console.log("run this code after every 2 seconds")
}, 2000)

setTimeout(() => {
    clearInterval(interval)
}, 11000)

