var loadLevel = function (game, n) {
    // -1是因为语言从0开始
    n = n - 1
    //第n关
    var level = levels[n]
    // block是方块，此处是一个空数组，关卡+1，push一个方块
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        // 有几个就push几个
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}
// 这里没放在mode的函数是因为有BUG，所以改全局声明
window.paused = false

// 写多了 var blocks = []

// 我没遇到延迟碰撞的BUG，这个是跟着写的
var enableDeBugMode = function (game, enable) {
    if (!enable) {
        return
    }
    //添加事件监听，按下P键暂停，按下数字选关
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // blocks = loadLevel(game, Number(k))
        }
    })


    // HTML中设置的功能按钮，可以调节整体fps
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        // log(event,input.value)
        window.fps = Number(input.value)
    })
}

var _main = function () {
    // images存的是需要载入的三张图片
    var images = {
        bullet: 'img/food.jpg',
        cloud: 'img/block.png',
        player: 'img/player1.png',
        sky: 'img/sky.jpg',
    }
    log(images.player)


    var game = DogGame.instance(30, images, function(g) {
        var s = Scene.new(g)
        g.runWithScene(s)
    }) 

    enableDeBugMode(game, true)
}

_main()