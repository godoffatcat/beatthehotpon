var Paddle = function (game) {
    // 传入paddle，在main文件中声明的game里
    var o = game.imageByName('paddle')
    // var o = {
    //     image: image,
    //     x: 100,
    //     y: 500,
    //     speed: 15
    // }
    o.x = 100
    o.y = 500
    o.speed = 15
    var paddle = o
    //实现移动
    o.move = function (x) {
        if (x < 0) {
            x = 0 
        }
        if (x > 800 - o.w) {
            x = 800 - o.w
        }
        o.x = x
    }
    //左移右移和与球相交的判断
    o.moveLeft = function () {
        o.move(paddle.x - paddle.speed)
    }
    o.moveRight = function () {
        o.move(paddle.x + paddle.speed)
    }
    var aInb = function(x, x1, x2) {
        return x >= x1 && x <= x2
    }
    o.collide = function (ball) {
        // if (ball.y + ball.h > o.y) {
        //     if (ball.x > o.x && ball.x < o.x + o.w) {
        //         return true
        //     }
        // }
        // return false
        var a = o
        var b = ball
        if(aInb(a.x , b.x , b.x + b.w) || aInb(b.x , a.x , a.x + a.w)) {
            if (aInb(a.y , b.y , b.y + b.h) || aInb(b.y , a.y , a.y + a.h)){
                return true
            }
        }
    }
    return o
}