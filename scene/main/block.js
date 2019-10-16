var Block = function (game, position) {
    var p = position
    // 获取方块
    var img = game.imageByName('block')
    // 这里的lifes我没有用，指撞击次数
    var o = {
        x: p[0],
        y: p[1],
        alive: true,
        lifes: p[2] || 1,
    }
    // o.image即block的图片，在game函数
    o.image = img.image
    o.w = img.w
    o.h = img.h
    // 击碎 减去方块的生命 超出即消失
    o.kill = function () {
        o.lifes --
        if (o.lifes < 1) {
            o.alive = false

        }
    }
    // 判断消失
    o.collide = function (b) {
        return o.alive && (rectInterSects(o, b) || rectInterSects(b, o))
    }
    return o
}