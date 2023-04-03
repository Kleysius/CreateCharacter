class Character {
    constructor(name, classe, level, intelligence, health, speed, strength, defense) {
        this.id = Math.floor(Math.random() * Date.now());
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
                this.boxShadow = "0 0 20px #000";
                this.border = "10px solid #1e2e12cc";
                break;
            case "Ange":
                this.img = "url(./views/assets/img/ange1.png)";
                this.backgroundColor = "#f0f8ff63";
                this.boxShadow = "0 0 20px #000";
                this.border = "10px solid #4e5154c9";
                break;
            case "Démon":
                this.img = "url(./views/assets/img/demon3.png)";
                this.backgroundColor = "#c53a4566";
                this.boxShadow = "0 0 20px #000";
                this.border = "10px solid #4a151ab5";
                break;
            case "Mage":
                this.img = "url(./views/assets/img/mage.png)";
                this.backgroundColor = "#2e415280";
                this.boxShadow = "0 0 20px #000";
                this.border = "10px solid #162028d1";
                break;
            case "Guerrier":
                this.img = "url(./views/assets/img/guerrier.png)";
                this.backgroundColor = "#9d90418a";
                this.boxShadow = "0 0 20px #000";
                this.border = "10px solid #4a441ec9";
                break;
            case "Vampire":
                this.img = "url(./views/assets/img/vampire2.png)";
                this.backgroundColor = "#415f9d8a";
                this.boxShadow = "0 0 20px #000";
                this.border = "10px solid #262e46cf";
                break;
            default:
                break;
        }
    }
}