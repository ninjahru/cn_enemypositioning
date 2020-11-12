//In this game we will focus on positioning the enemies using a timer.
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `, mySprite, -50, 0)
    projectile.lifespan = 1000
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . .
    `, mySprite, 0, 50)
    projectile.lifespan = 200
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.starField, 500)
    music.playTone(notes[Math.randomRange(0, notes.length - 1)], music.beat(BeatFraction.Quarter))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `, mySprite, 50, 0)
    projectile.lifespan = 200
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `, mySprite, 0, -50)
    projectile.lifespan = 200
})
let ghost: Sprite = null
let v = 0
let direction = 0
let projectile: Sprite = null
let notes: number[] = []
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    c 2 2 2 2 2 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6
    c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6
    c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6
    c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4
    c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4
    c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4
    c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4
    c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c
    c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c
    c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c
    c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c
    c c c c c c 2 c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c
    c c c c c c 2 c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c 6 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c 2 2 2 2 2 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c 6 6 6 4 4 4 4 4 4 4 c c c c c c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c 2 2 2 2 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c 4 4 4 4 4 c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c 2 2 2 2 2 6 6 6 c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c 2 2 2 2 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c 2 2 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c 2 2 2 c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c 2 2 2 2 c c c c c c c c c c c c c c c c c c c c c c c 4 4 4 4 c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 c c c c c c c c c c c c c c c c c c c c 7 7 4 4 4 4 4 4 c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 c c c c c c c c c c c c c c c c c c c c 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c c 2 2 2 2 2 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c c c 2 2 2 2 2 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c 2 c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c 4 c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c 2 c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c 4 c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c 2 c c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c c 2 c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c c c 4 c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c c
    c c c c c c c c c c c c 2 2 2 2 2 2 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c c c
    c c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c c
    c c c c c c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c c
    c c c c c c c c 2 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c c c c c
    c c c c c c c 2 2 2 2 2 2 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c c c c c c
    c c c c c c 2 2 2 2 2 2 7 7 c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c c c c c c
    c c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c c
    c c c c 2 2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4 c c c c
    c c 2 2 2 2 2 2 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 c c c
    c 2 2 2 2 2 2 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4 4 4 4 4 c
    2 2 2 2 2 2 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4 4
    2 2 2 2 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 4 4 4 4 4
    2 2 2 7 7 7 c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c 7 7 7 7 7 4 4 4
    7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 4 4
    7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 c
`)
mySprite = sprites.create(img`
    . . . . . . . . . f f f f . . . . . . . . . . .
    . . . . . . . f f f 2 2 f f f . . . . . . . . .
    . . . . . . f f f 2 2 2 2 f f f . . . . . . . .
    . . . . . f f f e e e e e e f f f . . . . . . .
    . . . . . f f e 2 2 2 2 2 2 e e f . . . . . . .
    . . . . . f e 2 f f f f f f 2 e f . . . . . . .
    . . . . . f f f f e e e e f f f f . . . . . . .
    . . . . f f e f b f 4 4 f b f e f f . . . . . .
    . . . . f e e 4 1 f d d f 1 4 e e f . . . . . .
    . . . . . f f f f d d d d d e e f . . . . . . .
    . . . . f d d d d f 4 4 4 e e f . . . . . . . .
    . . . . f b b b b f 2 2 2 2 f 4 e . . . . . . .
    . . . . f b b b b f 2 2 2 2 f d 4 . . . . . . .
    . . . . . f c c f 4 5 5 4 4 f 4 4 . . . . . . .
    . . . . . . f f f f f f f f . . . . . . . . . .
    . . . . . . . . f f . . f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
info.setLife(3)
notes = [277, 311, 370, 415, 466, 233]

game.onUpdateInterval(1000, function () {
    direction = Math.randomRange(0, 3)
    v = 20
    if (direction == 0) {
        ghost = sprites.create(img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
        `, SpriteKind.Enemy)
        ghost.setVelocity(-2, 0)
        /*************************\
         ***ADD YOUR CODE BELOW***
        \*************************/
        ghost.setPosition(150, 60)

        /*************************\
         ***ADD YOUR CODE ABOVE***
        \*************************/

    }
    if (direction == 1) {
        ghost = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . c c c c c . . . .
            . . . . . . c d d d d d c . . .
            . . . . . . c c c c c d c . . .
            . . . . . c 4 4 4 4 d c c . . .
            . . . . c d 4 4 4 4 4 1 c . . .
            . . . c 4 4 1 4 4 4 4 4 1 c . .
            . . c 4 4 4 4 1 4 4 4 4 1 c c c
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f
            . f 4 4 4 4 1 4 4 4 4 c b c f f
            . . f f f d 4 4 4 4 c d d c . .
            . . . . . f f f f f c c c . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Enemy)
        ghost.setVelocity(2, 0)
        /*************************\
         ***ADD YOUR CODE BELOW***
        \*************************/
        
        ghost.setPosition(0, 60)
        /*************************\
         ***ADD YOUR CODE ABOVE***
        \*************************/
        
    }
    if (direction == 2) {
        ghost = sprites.create(img`
            . . . . . . . . . . . 6 6 6 6 6
            . . . . . . . . . 6 6 7 7 7 7 8
            . . . . . . 8 8 8 7 7 8 8 6 8 8
            . . e e e e c 6 6 8 8 . 8 7 8 .
            . e 2 5 4 2 e c 8 . . . 6 7 8 .
            e 2 4 2 2 2 2 2 c . . . 6 7 8 .
            e 2 2 2 2 2 2 2 c . . . 8 6 8 .
            e 2 e e 2 2 2 2 e e e e c 6 8 .
            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
            . c 2 e e e 2 e 2 4 2 2 2 2 c .
            . . c 2 2 2 e e 2 2 2 2 2 2 2 e
            . . . e c c e c 2 2 2 2 2 2 2 e
            . . . . . . . c 2 e e 2 2 e 2 c
            . . . . . . . c e e e e e e 2 c
            . . . . . . . . c e 2 2 2 2 c .
            . . . . . . . . . c c c c c . .
        `, SpriteKind.Enemy)
        ghost.setVelocity(0, 2)
        /*************************\
         ***ADD YOUR CODE BELOW***
        \*************************/
       ghost.setPosition(80, 3)

        /*************************\
         ***ADD YOUR CODE ABOVE***
        \*************************/
    }
    if (direction == 3) {
        ghost = sprites.create(img`
            . . . . . . . . . b 5 b . . . .
            . . . . . . . . . b 5 b . . . .
            . . . . . . b b b b b b . . . .
            . . . . . b b 5 5 5 5 5 b . . .
            . . . . b b 5 b c 5 5 d 4 c . .
            . b b b b 5 5 5 b f d d 4 4 4 b
            . b d 5 b 5 5 b c b 4 4 4 4 b .
            . . b 5 5 b 5 5 5 4 4 4 4 b . .
            . . b d 5 5 b 5 5 5 5 5 5 b . .
            . b d b 5 5 5 d 5 5 5 5 5 5 b .
            b d d c d 5 5 b 5 5 5 5 5 5 b .
            c d d d c c b 5 5 5 5 5 5 5 b .
            c b d d d d d 5 5 5 5 5 5 5 b .
            . c d d d d d d 5 5 5 5 5 d b .
            . . c b d d d d d 5 5 5 b b . .
            . . . c c c c c c c c b b . . .
        `, SpriteKind.Enemy)
        ghost.setVelocity(0, -3)
        /*************************\
         ***ADD YOUR CODE BELOW***
        \*************************/
        ghost.setPosition(80, 110)

        /*************************\
         ***ADD YOUR CODE ABOVE***
        \*************************/
    }
})
