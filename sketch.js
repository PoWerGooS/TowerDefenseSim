var tank,tankI
var sniper,sniperI
var fireball,fireballI
var smoke,smokeI
var backdrop
var backdropI
var fireballGroup
function preload(){
    tankI = loadImage("TransparentTank.png");
    sniperI = loadImage("SniperMonkey.png");
    fireballI = loadImage("TransparentFireball.png");
    smokeI = loadImage("transparentExplosion.png");
    backdropI = loadImage("Backdrop.png")
}
function setup(){
createCanvas(displayWidth,displayHeight)
tank = createSprite(595,699,10,10)
tank.addImage(tankI)
tank.scale = 0.25
sniper = createSprite(180,180,10,10)
sniper.addImage(sniperI)
sniper.scale =0.75
fireballGroup = new Group()
}
function draw(){
    background(backdropI)
    spawnFireballs()
    drawSprites()
    tank.rotation = 175
}
function spawnFireballs(){
    if(frameCount%20 === 0){
        var fireball = createSprite(tank.x-55,tank.y-75,30,30)
        fireball.addImage(fireballI)
        fireball.scale = 0.02
        var rand = Math.round(random(1,10))
        console.log(rand)
        if(rand === 1){ 
        fireball.velocityX = 10
        fireball.velocityY = -10
    }
    if(rand === 2){ 
        fireball.velocityX = -10
        fireball.velocityY = 10
    }
    if(rand === 3){ 
        fireball.velocityX = -15
        fireball.velocityY = 15
    }
    if(rand === 4){ 
        fireball.velocityX = -15
        fireball.velocityY = 12
    }
    if(rand === 5){ 
        fireball.velocityX = 20
        fireball.velocityY = -15
    }
    if(rand === 6){ 
        fireball.velocityX = -15
        fireball.velocityY = -10
    }
    if(rand === 7){ 
        fireball.velocityX = 15
        fireball.velocityY = 0
    }
    if(rand === 8){ 
        fireball.velocityX = 0
        fireball.velocityY = -20
    }
    if(rand === 9){ 
        fireball.velocityX = 7
        fireball.velocityY = 15
    }
    if(rand === 10){ 
        fireball.velocityX = 20
        fireball.velocityY = 15
    }
        //fireballGroup.add(fireball)
        fireball.lifetime = 100

    }
}