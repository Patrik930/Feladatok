function makeColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

//console.log(makeColor())
let match = false
let colors = []
let squareArr = document.querySelectorAll('.square')

function init() {
    //scp-096
    colors = []
    for (let obj of squareArr) {
        //console.log(obj)
        let color = makeColor()
        obj.style.backgroundColor = color
        colors.push(color)
    }
    let index = Math.floor(Math.random() * 6)
    document.getElementById('color').innerHTML = colors[index]
    document.querySelector('i').innerHTML = ''
    match = false

}


init()

console.log(colors)


function verify(e) {
    if (!match) {
        console.log(e.target.style.backgroundColor)
        let clickedColor = e.target.style.backgroundColor
        let c = document.getElementById('color').innerHTML
        if (clickedColor == c) {
            document.querySelector('h1').style.backgroundColor = clickedColor
            document.querySelector('i').innerHTML = '😀'
            match = true
        } else {
            document.querySelector('i').innerHTML = '☹️'
        }
    }

}


function uj() {
    document.querySelector('h1').style.backgroundColor = ''
    init()
}