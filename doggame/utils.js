var e = sel => document.querySelector(sel)

// var log = function(s) {
//     e('#id-text-log').value += '\n' +s
// }

var log = console.log.bind(console)

// path就是图片
var imageFromPath = function (path) {
    // new一个图片
    var img = new Image()
    //图片的地址从path传进去
    img.src = path
    return img
}

// 这个恶心的东西是判断板子和墙壁碰撞的
var rectInterSects = function (a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}