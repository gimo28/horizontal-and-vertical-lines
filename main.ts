input.onButtonPressed(Button.A, function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(Y, X)
            basic.pause(100)
        }
    }
    basic.pause(2000)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, Y)
            basic.pause(100)
        }
    }
    basic.pause(2000)
    control.reset()
})
basic.forever(function () {
	
})
