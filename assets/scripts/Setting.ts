
import { _decorator, Component, Node, Sprite, director, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Setting
 * DateTime = Thu Apr 14 2022 01:53:17 GMT+0800 (中国标准时间)
 * Author = kkstare
 * FileBasename = Setting.ts
 * FileBasenameNoExtension = Setting
 * URL = db://assets/scripts/Setting.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('Setting')
export class Setting extends Component {
    @property(Node)
    btns:Node = null


    //color rendertexture
    @property(Node)
    colorNode:Node = null

    start () {
        this.initBtns()

        director.on("touchEnd",this.ChangeTouch,this)

    }
    ChangeTouch(args) {
        console.log(args)
        let pos = new Vec2(args[0],args[1])
        
        this.colorNode.getComponent(Sprite).getMaterial(0).setProperty("WaveCentre", pos)

        this.scheduleOnce(() => {
            this.colorNode.getComponent(Sprite).getMaterial(0).setProperty("WaveCentre", new Vec2(-1,-1))

        },1)

    }
    initBtns() {
        console.log(this.btns)
        for (let index = 0; index < this.btns.children.length; index++) {
            this.btns.children[index].on(Node.EventType.TOUCH_END, () => {
                this.colorNode.getComponent(Sprite).getMaterial(0).setProperty("renderType",index)
            })
        }
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

