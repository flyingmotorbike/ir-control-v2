DFRobotMaqueenPlusV2.onIrDatagram(function (message) {
    basic.showNumber(message)
    if (message == 0) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, speed)
    }
    if (message == 1) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 0)
    }
    if (message == 20) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, speed)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, speed / turn)
    }
    if (message == 22) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, speed / turn)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, speed)
    }
    if (message == 16) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, speed)
    }
})
let turn = 0
let speed = 0
DFRobotMaqueenPlusV2.init()
speed = 50
turn = 4
