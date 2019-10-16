var Ball = function (game) {
    var o = game.imageByName('ball')
    o.x = 100
    o.y = 200
    o.speedX = 15
    o.speedY = 15
    o.fired = false
    // o.fire即发射
    o.fire = function () {
        o.fired = true
    }
    // 判断移动和相撞
    o.move = function () {
        // log(o.fired)
        if (o.fired) {
            if (o.x < 0 || o.x > 770) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 580) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
            // if (o.y > 620) {
            //     o.y = 630
            //     alert('这都接不住，你这个辣鸡！')
            // }
        }
    }
    o.FanTan = function () {
        o.speedY *= -1

    }
    o.hasPoint = function(x, y) {
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
    return o
}