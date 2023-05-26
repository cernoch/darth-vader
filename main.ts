function part4 () {
    repete()
    music.playTone(175, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(25)
}
input.onButtonPressed(Button.A, function () {
    display = 1
})
function part2 () {
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(175, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(25)
}
function repete () {
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(311, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(277, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.playTone(208, music.beat(BeatFraction.Half))
    basic.pause(25)
}
input.onButtonPressed(Button.AB, function () {
    display = 0
})
input.onButtonPressed(Button.B, function () {
    display = 2
})
input.onGesture(Gesture.Shake, function () {
    part1()
})
function part3 () {
    repete()
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.playTone(208, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(25)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    part1()
    part2()
    part3()
    part4()
})
function part1 () {
    music.playTone(220, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Half))
    basic.pause(25)
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.pause(25)
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(100)
}
let display = 0
music.setTempo(60)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (display == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (display == 1) {
        basic.showLeds(`
            . . . # #
            # # . # #
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(200)
        display = 8
    } else if (display == 2) {
        basic.showLeds(`
            # # . . .
            # # . # #
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(200)
        display = 9
    } else if (display == 3) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(200)
        display = 10
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(2000)
        if (display > 3) {
            display += -3
        }
    }
})
