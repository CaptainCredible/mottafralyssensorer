radio.onReceivedValue(function (name, value) {
    radio.writeReceivedPacketToSerial()
    led.toggle(2, 2)
})
radio.setGroup(1337)
basic.showLeds(`
    # # # # #
    . . # . .
    . # # # .
    . . # . .
    . . # . .
    `)
