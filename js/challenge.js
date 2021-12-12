document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById(`counter`)
    let num = 0
    let dependCount = true
    const increment = () => num++
    const decrement = () => num--

    setInterval(() => {
        if (dependCount === true) {
        counter.textContent = increment()
        }
    }, 1000)

    let plus = document.getElementById(`plus`)
    plus.addEventListener(`click`, () => counter.textContent = increment())
    
    
    let minus = document.getElementById(`minus`)
    minus.addEventListener(`click`, () => counter.textContent = decrement())

    const obj = {}
    let heart = document.getElementById(`heart`)
    heart.addEventListener(`click`, () => {
        let counterContent = counter.textContent
        let li = document.createElement(`li`)
        let div = document.querySelector(`.likes`)
        
        
        if (counterContent in obj) {
            let uniqueID = document.getElementById(`${counterContent}`)
            uniqueID.textContent = `${counterContent} has been liked ${obj[counterContent]++} times`
        } else {
            obj[counterContent] = 1
            div.append(li)
            li.id = counterContent
            li.textContent = `${counterContent} has been liked 1 time`
        }
  
    })

    let pause = document.getElementById(`pause`)
    pause.addEventListener(`click`, () => {
        if (pause.textContent === 'resume'){
            pause.textContent = ' pause '
            plus.disabled = false
            minus.disabled = false
            heart.disabled = false
            dependCount = true
        } else if (pause.textContent === ' pause '){
            plus.disabled = true
            minus.disabled = true
            heart.disabled = true
            pause.textContent = 'resume'
            dependCount = false
            } 
    })

    document.getElementById(`submit`).addEventListener(`click`, (e) => {
        e.preventDefault()
        let input = document.getElementById(`comment-input`).value
        let p = document.createElement(`p`)
        p.textContent = input
        document.getElementById(`list`).appendChild(p)
        document.getElementById(`comment-form`).reset()
    })
})

// "use strict";

// function _toConsumableArray(a) {
//   if (Array.isArray(a)) {
//     for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
//     return c
//   }
//   return Array.from(a)
// }
// var playing = !0,
//   timer = function() {
//     return setInterval(function() {
//       var a = document.getElementById("counter"),
//         b = parseInt(a.innerText);
//       a.innerText = b + 1
//     }, 1e3)
//   },
//   interval = timer(),
//   minus = document.getElementById("minus"),
//   plus = document.getElementById("plus"),
//   heart = document.getElementById("heart"),
//   pause = document.getElementById("pause"),
//   commentForm = document.getElementsByTagName("form")[0];
// minus.addEventListener("click", function() {
//   var a = document.getElementById("counter"),
//     b = parseInt(a.innerText);
//   a.innerText = b - 1
// }), plus.addEventListener("click", function() {
//   var a = document.getElementById("counter"),
//     b = parseInt(a.innerText);
//   a.innerText = b + 1
// }), heart.addEventListener("click", function() {
//   var a = document.getElementById("counter"),
//     b = parseInt(a.innerText),
//     c = document.querySelector(".likes"),
//     d = void 0;
//   if ([].concat(_toConsumableArray(c.children)).map(function(a) {
//       return parseInt(a.dataset.num)
//     }).includes(b)) {
//     d = document.querySelector('[data-num="' + b + '"]');
//     var e = parseInt(d.children[0].innerText);
//     d.textContent = b + " has been liked <span>" + (e + 1) + "</span> times"
//   } else(d = document.createElement("li")).setAttribute("data-num", b), d.textContent = b + " has been liked <span>1</span> time", c.appendChild(d)
// }), pause.addEventListener("click", function() {
//   playing ? (playing = !1, clearInterval(interval), this.innerText = "resume") : (playing = !0, interval = timer(), this.innerText = "pause"), [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a) {
//     "pause" !== a.id && (a.disabled = !playing)
//   })
// }), commentForm.addEventListener("submit", function(a) {
//   a.preventDefault();
//   var b = this.children[0],
//     c = b.value;
//   b.value = "";
//   var d = document.querySelector(".comments"),
//     e = document.createElement("p");
//   e.innerText = c, d.appendChild(e)
// });
