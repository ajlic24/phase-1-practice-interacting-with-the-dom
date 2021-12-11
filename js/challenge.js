document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById(`counter`)
    let num = 0
    let heartCounter = 0
    
    const increment = () => num++
    const decrement = () => num--
    const heartLikeCounter = () => heartCounter++

    const pageCounter = setInterval(() => counter.textContent = increment(), 1000);

    let plus = document.getElementById(`plus`).addEventListener(`click`, () => counter.textContent = increment())
    
    
    let minus = document.getElementById(`minus`).addEventListener(`click`, () => counter.textContent = decrement())

    document.getElementById(`heart`).addEventListener(`click`, (event) => {
        heartLikeCounter()
    
       
            let ul = document.createElement(`ul`)
            let li = document.createElement(`li`)
            let div = document.querySelectorAll(`h3`)[0]

            
            div.appendChild(li)

            li.textContent = `${counter.textContent} has been liked ${event.detail} times`
            
            
          
            // heartCounter = 0
       
        
        
        

    })

})