let gameManager = new CharacterManager();

document.querySelector("#create-character").addEventListener('click', () => {
    setTimeout(() => {
        let name = document.querySelector("#name").value;
        let classe = document.querySelector("#class").value;
        let level = document.querySelector("#level").value;
        let intelligence = document.querySelector("#intelligence").value;
        let health = document.querySelector("#health").value;
        let speed = document.querySelector("#speed").value;
        let strength = document.querySelector("#strength").value;
        let defense = document.querySelector("#defense").value;
        const character = new Character(name, classe, level, intelligence, health, speed, strength, defense);
        gameManager.createCharacter(character);
    }, 300);
})