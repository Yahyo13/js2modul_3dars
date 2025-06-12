let hour = document.querySelector(`.text1`)
let minute = document.querySelector(`.text2`)
let second = document.querySelector(`.text3`)

setInterval(() => {
    let time = new Date

    let seconds = time.getSeconds()
    
    let minutes = time.getMinutes()
    
    let hours = time.getHours()
    
    hour.textContent = hours
    minute.textContent = minutes
    second.textContent = seconds 
}, 1000   );
