
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Window
 * DateTime = Fri Apr 15 2022 03:14:56 GMT+0800 (中国标准时间)
 * Author = kkstare
 * FileBasename = Window.ts
 * FileBasenameNoExtension = Window
 * URL = db://assets/scripts/Window.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('Window')
export class Window extends Component {
    @property(Node)
    close:Node = null
    

    start () {
        // [3]
        this.close.on(Node.EventType.TOUCH_END, () => {
            this.node.active = false
        })
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
