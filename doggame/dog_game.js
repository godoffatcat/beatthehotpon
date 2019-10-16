class DogGame {
    constructor(fps, images, runCallBack) {
        window.fps = fps
        this.images = images
        this.runCallBack = runCallBack
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector("#id-canvas")
        this.context = this.canvas.getContext('2d')
        //events
        // 按下的时候触发事件
        var self = this
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        //松开释放
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = false
        })
        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    drawImage(img) {
        this.context.drawImage(img.texture, img.x, img.y)
    }

    update = () => {
        this.scene.update()
    }
    draw = () => {
        this.scene.draw()
    }

    registerAction = (key, callback) => {
        this.actions[key] = callback
    }

    runloop = () => {
        var g = this
        var actions = Object.keys(g.actions);
        // log(actions)
        // 执行事件
        for (var i = 0; i < actions.length; i++) {
            // key赋值为某个动作此前绑定的按键
            var key = actions[i]
            // 如果按键被按下了
            if (g.keydowns[key]) {
                // 执行
                g.actions[key]()
            }
        }
        g.update()
        // log(g.update)
        //清空画布
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        //画画
        g.draw()
        //一次性计时器
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }

    textureByName(name) {
        var g = this
        var img = g.images[name]
        // var image = {
        //     w: img.width,
        //     h: img.height,
        //     image: img, 
        // }
        return img
    }

    runWithScene(scene) {
        var g = this
        g.scene = scene
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    _start (scene) {
        this.runCallBack(this)
    }


    init = () => {
        var g = this
        var loads = []
        //names提取的是images里的keys
        var names = Object.keys(g.images)
        // 遍历，逐个new出来
        for (var i = 0; i < names.length; i++) {
            //逐个的图片引用名
            let name = names[i]
            // path是图片路径，即images里的值，读取
            var path = g.images[name]
            //画画
            let img = new Image()
            img.src = path
            img.onload = function () {
                //存进去
                g.images[name] = img
                loads.push(1)
                //如果加载的图片等于图片总数，即可run
                if (loads.length == names.length) {
                    log('load images')
                    g._start()
                }
            }
        }

    }
}

// // fps这个参数其实在另一个函数里有声明，我觉得可以删但他没有
// // images是一个在game函数中声明了的对象 key是引用名，value是路径
// // 图片载入成功， 运行（runloop 
// var DogGame = function (fps, images, runCallBack) {
//     // g是一个object对象，包含三个参数，即整个画布的内容
//     var g = {
//         scene: null,
//         actions: {},
//         keydowns: {},
//         images: {},
//     }
//     log(g)
//     // 正常创建画布的操作

//     // 分别赋值
//     g.canvas = canvas
//     g.context = context


//     g.drawImage = function (doge) {
//         g.context.drawImage(doge.image, doge.x, doge.y)
//     }
//     // 按下的时候触发事件
//     window.addEventListener('keydown', function (event) {
//         g.keydowns[event.key] = true
//     })
//     //松开释放
//     window.addEventListener('keyup', function (event) {
//         g.keydowns[event.key] = false
//     })
//     //update

//     // 帧数
//     window.fps = 30
//     // 运行的函数
//     var runloop = function () {
//         // log(window.fps)
//         //这里的actions是前面的object里的第一个参数？
//         var actions = Object.keys(g.actions);
//         // log(actions)
//         // 执行事件
//         for (var i = 0; i < actions.length; i++) {
//             // key赋值为某个动作此前绑定的按键
//             var key = actions[i]
//             // 如果按键被按下了
//             if (g.keydowns[key]) {
//                 // 执行
//                 g.actions[key]()
//             }
//         }
//         // 更新
//         g.update()
//         // log(g.update)
//         //清空画布
//         context.clearRect(0, 0, canvas.width, canvas.height)
//         //画画
//         g.draw()
//         //一次性计时器
//         setTimeout(function () {
//             runloop()
//         }, 1000 / window.fps)
//     }
//     // 载入图片  先是一个空的数组
//     var loads = []
//     //names提取的是images里的keys
//     var names = Object.keys(images)
//     log(images)
//     // 遍历，逐个new出来
//     for (var i = 0; i < names.length; i++) {
//         //逐个的图片引用名
//         let name = names[i]
//         // path是图片路径，即images里的值，读取
//         var path = images[name]
//         //画画
//         let img = new Image()
//         img.src = path
//         img.onload = function () {
//             //存进去
//             g.images[name] = img
//             loads.push(1)
//             //如果加载的图片等于图片总数，即可run
//             if (loads.length == names.length) {
//                 log('load images')
//                 g._start()
//             }
//         }
//     }

//     // 图片的name在三个图片文件里传了， 文件地址在main文件的game函数


//     g.runWithScene = function (scene) {
//         g.scene = scene
//         setTimeout(function () {
//             runloop()
//         }, 1000 / fps)
//     }
//     g.replaceScene = function (scene) {
//         g.scene = scene
//     }
//     g._start = function (scene) {
//         runCallBack(g)
//     }

//     return g
// }