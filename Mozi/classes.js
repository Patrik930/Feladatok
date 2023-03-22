class Hely {
    constructor(x, y, ar, id) {
        this.x = x;
        this.y = y;
        this.ar = ar;
        this.free = true;
        this.id = id;
    }
}
class Terem {
    helyek = []

    initialize(yFrom, yTo, ar) {
        let id = this.helyek.length// = 0 nem helyes
        for (let j = yFrom; j <= yTo; j++) {
            for (let i = 1; i <= 24; i++) {
                this.helyek.push(new Hely(i, j, ar, id))
                id++;
            }
        }
    }
    foglalt() {
        let nr = 0
        for (let obj of this.helyek) {
            if (!obj.free) {
                nr++;
            }
        }
        return nr
    }
    foglalt() {
        let joe = 0
        for (let obj of this.helyek) {
            if (!obj.free) {
                joe+=obj.ar;
            }
        }
        document.query
    }
}