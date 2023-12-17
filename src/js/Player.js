class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    toString(){
        return `name : ${this.name}, score : ${this.score}`;
    }
    updateScore() {
        return this.score++;
    }
}

