class Box {
    constructor(x, y) {
        var options = {
            restitution: 0.3,
            friction: 1,
            density: 0.5
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
    }

    score() {
        if (this.visibility < 0 && this.visibility > -105) {
            score++
        }
    }

    display() {
        if (this.body.speed < 5) {
            var pos = this.body.position
            var angle = this.body.angle
            push()
            translate(pos.x, pos.y)
            rotate(angle);
            stroke("black")
            strokeWeight(2)
            fill(255, 245, 1)
            rectMode(CENTER)
            rect(0, 0, 50, 50)
            pop();
        }
        else {
            push()
            World.remove(world, this.body)
            this.body.visibility -= 5;
            pop()
        }
    }
}
