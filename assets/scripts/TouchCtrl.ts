import { Camera, Component, director, EventKeyboard, EventTouch, input, Input, KeyCode, Node, Sprite, sys, System, Touch, Vec2, Vec3, view, _decorator } from "cc";



const { ccclass, property } = _decorator;

 
@ccclass('TouchCtrl')
export class TouchCtrl extends Component {
    
    @property(Camera)
    camera:Camera = null!



    private keyBoard = [0,0]

    start() {
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchRotateMove.bind(this), this);

        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this), this);

    }
  
    private onTouchRotateMove(event: EventTouch) {
        console.log("touch")
        let rotateDelta = event.getDelta();
		if (rotateDelta.length() > 1) {
            this.rotateByCenter(new Vec3(rotateDelta.y * 0.5, -rotateDelta.x, 0));
        }

    }
    onTouchEnd(e:Touch) {
        // console.log(e.getLocationInView())
        let pos = e.getLocation()
        let winWidth = view.getVisibleSizeInPixel().width
        let winHeight = view.getVisibleSizeInPixel().height
        console.log(pos.x / winWidth, pos.y / winHeight)
        
        director.emit("touchEnd",[pos.x / winWidth,(pos.y / winHeight)])
    }
        /**视角旋转-围绕中心 */
    rotateByCenter(addVec3: Vec3) {
        console.log(addVec3)

        let mEv = this.camera.node.eulerAngles.clone().add(addVec3.multiplyScalar(3));

        this.camera.node.eulerAngles = this.camera.node.eulerAngles.clone().lerp(mEv, 0.1);

    }
}