class Character {
    constructor(name, classe, level, intelligence, health, speed, strength, defense) {
        this.id = Math.floor(Math.random() * Date.now());
        console.log(Math.floor(Math.random() * parseInt(Date.now)));
        this.name = name;
        this.classe = classe;
        this.level = level;
        this.strength = strength;
        this.intelligence = intelligence;
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        switch (this.classe) {
            case "Humain":
                this.img = "url(./views/assets/img/humain.png)";
                this.backgroundColor = "#4b782b61";
                this.boxShadow = "0 0 20px #4b782bc4";
                break;
            case "Ange":
                this.img = "url(./views/assets/img/ange1.png)";
                this.backgroundColor = "#f0f8ff63";
                this.boxShadow = "0 0 20px #f0f8ffba";
                break;
            case "Démon":
                this.img = "url(./views/assets/img/demon3.png)";
                this.backgroundColor = "#c53a4566";
                this.boxShadow = "0 0 20px #c53a45cc";
                break;
            case "Mage":
                this.img = "url(./views/assets/img/mage.png)";
                this.backgroundColor = "#2e415280";
                this.boxShadow = "0 0 20px #2e4152e3";
                break;
            case "Guerrier":
                this.img = "url(./views/assets/img/guerrier.png)";
                this.backgroundColor = "#9d90418a";
                this.boxShadow = "0 0 20px #9d9041d6";
                break;
            case "Vampire":
                this.img = "url(./views/assets/img/vampire2.png)";
                this.backgroundColor = "#415f9d8a";
                this.boxShadow = "0 0 20px #415f9de6";
                break;
            default:
                break;
        }
    }
}