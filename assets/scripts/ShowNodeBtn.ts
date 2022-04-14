
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = ShowNodeBtn
 * DateTime = Fri Apr 15 2022 03:18:21 GMT+0800 (中国标准时间)
 * Author = kkstare
 * FileBasename = ShowNodeBtn.ts
 * FileBasenameNoExtension = ShowNodeBtn
 * URL = db://assets/scripts/ShowNodeBtn.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('ShowNodeBtn')
export class ShowNodeBtn extends Component {

    @property(Node)
    showNodes:Node[] = []

    start () {
        // [3]
        this.node.on(Node.EventType.TOUCH_END, () => {
            for (let index = 0; index < this.showNodes.length; index++) {
                // const element = array[index];
                this.showNodes[index].active = true
                
            }
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
