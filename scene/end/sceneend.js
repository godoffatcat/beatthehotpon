
class SceneEnd extends DogScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function () {
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        this.game.context.fillText('游戏结束，按R重头再来', 200, 400)
    }
}