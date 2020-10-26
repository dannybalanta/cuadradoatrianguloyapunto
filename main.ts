basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # # #
        . # . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . # #
        . . # . #
        # # . . #
        # . . . #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . # #
        . . # . #
        . # . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        # # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.pause(5000)
})
