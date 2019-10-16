class Scene extends DogScene {
    constructor(game) {
        super(game)
        //画背景图
        this.bg = Dogimage.new(game, 'sky')
        //画玩家的飞机
        this.player = Dogimage.new(game, 'player')
        this.player.x = 200
        this.player.y = 200
        log(this.bg)
        log(this.player)
        // game.registerAction('k', function () {
        //     var s = Scene(game)
        //     game.replaceScene(s)
        // })
    }


    draw() {
        this.game.drawImage(this.bg)
        // this.game.context.fillText('按"k" 开始游戏', 200, 400)
    }
}

// var Scene = function(game) {
//     var s = {
//         game: game,
//     }
//     var ball = Ball(game)
//     var paddle = Paddle(game)

//     var score = 0
//     var blocks = loadLevel(game, 1)

//     game.registerAction('a', function () {
//         paddle.moveLeft()
//     })
//     game.registerAction('d', function () {
//         paddle.moveRight()
//     })

//     game.registerAction('f', function () {
//         ball.fire()
//     })

//     s.draw = function() {
//         game.context.fillStyle = '#554';
//         game.context.fillRect(0, 0, 800, 600);

//         // game.drawImage(bground)
//         game.drawImage(paddle)
//         game.drawImage(ball)
//         // 计算存在的砖块数量
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if (block.alive) {
//                 game.drawImage(block)
//             }
//         }
//         // 文字 计数部分
//         game.context.fillText('分数:' + score, 700, 40)
//     }
//     s.update = function() {
//         if (window.paused) {
//             return
//         }
        
//         ball.move()
//         // 游戏结束
//         if (ball.y > paddle.y) {
//             // 换场景
//             var end = SceneEnd.new(game)
//             game.replaceScene(end)
//         }
//         // 如果撞上了墙
//         if (paddle.collide(ball)) {
//             ball.FanTan()
//         }
//         // 如果撞的是砖块，砖块消失，球反弹，加分
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if (block.collide(ball)) {
//                 block.kill()
//                 ball.FanTan()
//                 score += 100
//             }
//         }
//     }

//     var enableDrag = false
//     game.canvas.addEventListener('mousedown', function(event){
//         var x = event.offsetX
//         var y = event.offsetY
//         log(x, y)
//         // 检查点中的是ball
//         if (ball.hasPoint(x, y)) {
//             enableDrag = true
//         }
//     }) 
//     game.canvas.addEventListener('mousemove', function(event){
//         var x = event.offsetX
//         var y = event.offsetY
//         if (enableDrag) {
//             ball.x = x
//             ball.y = y
//         }
//     }) 
//     game.canvas.addEventListener('mouseup', function(event){
//         var x = event.offsetX
//         var y = event.offsetY
//         enableDrag = false
//     }) 

//     return s
// }