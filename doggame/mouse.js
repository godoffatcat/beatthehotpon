var e = sel => document.querySelector(sel)

var bar = e('.dog-fg')

bar.style.left = '0px'
var dogMoving = false
var initX = 0
var initLeft
e('.dog-fg').addEventListener('mousedown', event => {
    dogMoving = true
    initX = event.clientX
    initLeft = postMessage(bar)
})

e('.dog-fg').addEventListener('mousemove', event => {
    if (dogMoving) {
        var offset = event.clientX - initX
        setPos(bar, initLeft + offset)
    }
})

e('.dog-fg').addEventListener('mouseup', event => {
    dogMoving = false
})