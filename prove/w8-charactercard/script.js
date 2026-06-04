const character = {
    name: "Soul of the Flame",
    class: "Chosen Undead",
    level: 10,
    health: 120,
    maxHealth: 120,
    image: "images/soul-knight.jpg",

    attacked() {
        this.health = Math.max(0, this.health - 20);
        this.render();

        if (this.health === 0) {
            setTimeout(() => alert(`${this.name} has died!`), 50);
        }
    },

    levelUp() {
        this.level += 1;
        this.render();
    },

    render() {
        document.querySelector("#health").innerHTML = `<strong>HP:</strong> ${this.health} / ${this.maxHealth}`;
        document.querySelector("#level").innerHTML = `<strong>Level:</strong> ${this.level}`;
    }
};

document.getElementById("attacked").addEventListener("click", () => character.attacked());
document.getElementById("level-up").addEventListener("click", () => character.levelUp());

character.render();