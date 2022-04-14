
import { _decorator, Component, Node, Sprite, director, Vec2, Vec3, game } from 'cc';
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
    touchNode:Node = null

    @property(Node)
    bigBtns: Node[] = []

    @property(Node)
    parentNodes: Node[] = []

    @property(Node)
    showNodes:Node[]=[]


    private pos: Vec2 = null
    private saveTime: number = 0
    private open:boolean = false
    start () {
        this.initBtns()

        director.on("touchEnd",this.ChangeTouch,this)
    }
    ChangeTouch(args) {
        let pos = new Vec2(args[0],args[1])
        
        this.pos = new Vec2(pos.x,pos.y)
        this.open = true

    }
    initBtns() {

        for (let index = 0; index < this.parentNodes.length; index++) {
            for (let j = 0; j < this.parentNodes[index].children.length; j++) {
                this.parentNodes[index].children[j].on(Node.EventType.TOUCH_END, () => {
                    this.showNodes[index].getComponent(Sprite).getMaterial(0).setProperty("renderType",j-0.5)
                })
    
            }
        }

        for (let index = 0; index < this.bigBtns.length; index++) {
            // const element = array[index];
            this.bigBtns[index].on(Node.EventType.TOUCH_END, () => {

                for (let j = 0; j < this.parentNodes.length; j++) {
                    this.parentNodes[j].active = false
                } 
                this.parentNodes[index].active = true
            })
            
        }

        
    }
    update (deltaTime: number) {
        // [4]
        if (!this.open) {
            return
        }
        this.saveTime += deltaTime
        this.touchNode.getComponent(Sprite).getMaterial(0).setProperty("WaveCentre", new Vec3(this.pos.x,this.pos.y,this.saveTime))

        if (this.saveTime > 1.0) {
            this.saveTime = 0.0
            this.open = false
            this.touchNode.getComponent(Sprite).getMaterial(0).setProperty("WaveCentre", new Vec3(this.pos.x,this.pos.y,-1))

        }
    }
}

