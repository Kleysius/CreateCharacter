class CharacterManager {
    constructor() {
        this.characters = [];
    }

    createCharacter(char) {
        this.characters.push(char);
        this.displayCharacter(this.characters);
    }

    displayCharacter(characters) {
        let parent = document.querySelector(".containerCharacters");
        parent.innerHTML = "";
        characters.forEach(element => {
            // Card container
            let container = document.createElement("div");
            container.classList.add("card-character");
            parent.appendChild(container);
            // Card Body
            let containerCard = document.createElement("div");
            containerCard.classList.add("card-body");
            container.appendChild(containerCard);
            // Paragraphe Nom
            let nameP = document.createElement("p");
            nameP.innerHTML = `Nom : ${element.name}`;
            containerCard.appendChild(nameP);
            // Paragraphe Classe
            let classP = document.createElement("p");
            classP.innerHTML = `Classe : ${element.classe}`;
            containerCard.appendChild(classP);
            // Paragraphe Niveau
            let levelP = document.createElement("p");
            levelP.innerHTML = `Niveau : ${element.level}`;
            containerCard.appendChild(levelP);
            // Paragraphe Intelligence
            let intellP = document.createElement("p");
            intellP.innerHTML = `Intelligence : ${element.intelligence}`;
            containerCard.appendChild(intellP);
            // Paragraphe Vie
            let healthP = document.createElement("p");
            healthP.innerHTML = `Points de vie : ${element.health}`;
            containerCard.appendChild(healthP);
            // Paragraphe Vitesse
            let speedP = document.createElement("p");
            speedP.innerHTML = `Vitesse : ${element.speed}`;
            containerCard.appendChild(speedP);
            // Paragraphe Force
            let strengthP = document.createElement("p");
            strengthP.innerHTML = `Force : ${element.strength}`;
            containerCard.appendChild(strengthP);
            // Paragraphe Defence
            let defenseP = document.createElement("p");
            defenseP.innerHTML = `Défense : ${element.defense}`;
            containerCard.appendChild(defenseP);
            // Container button
            let containerBtn = document.createElement("div");
            containerBtn.classList.add("container-btn");
            containerCard.appendChild(containerBtn);
            // Bouton modifier
            let btnUpdate = document.createElement("button");
            btnUpdate.innerHTML = "Modifier";
            containerBtn.appendChild(btnUpdate);
            btnUpdate.addEventListener('click', () => {
                    this.displayModalChar(element,container);
            });
            // Bouton supprimer
            let btnDelete = document.createElement("button");
            btnDelete.innerHTML = "Supprimer";
            containerBtn.appendChild(btnDelete);
            btnDelete.addEventListener('click', () => {
                let opacity = 1;
                const intervalId = setInterval(() => {
                    opacity -= 0.05;
                    containerCard.style.opacity = opacity;
                    if (opacity <= 0) {
                        clearInterval(intervalId);
                        this.deleteCharacter(element);
                    }
                }, 50);
            });
            containerCard.style.backgroundImage = element.img;
            containerCard.style.backgroundColor = element.backgroundColor;
            containerCard.style.boxShadow = element.boxShadow;
            containerCard.style.border = element.border;
            // Effet au survol du curseur
            container.addEventListener('mousemove', (e) => {
                const xAxis = (container.offsetWidth / 2 - e.pageX + container.offsetLeft) / 15;
                const yAxis = (container.offsetHeight / 2 - e.pageY + container.offsetTop) / 15;
                containerCard.style.transform = "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
            });
            container.addEventListener('mouseenter', () => {
                containerCard.style.transition = '0.1s';
            });
            container.addEventListener('mouseleave', () => {
                containerCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
                containerCard.style.transition = 'all 0.5s ease';
            });
        })
    }

    deleteCharacter(char) {
        let index = this.characters.indexOf(char);
        this.characters.splice(index, 1);
        this.displayCharacter(this.characters);
    }

    updateCharacter(char, oldChar) {
        let index = this.characters.indexOf(oldChar);
        this.characters[index] = char;
        this.displayCharacter(this.characters);
    }

    displayModalChar(char,elem) {
        let parent = elem;
        parent.innerHTML = `<section class="character-modify">
            <h2>Mofidie ton personnage</h2>
            <h3>Identité</h3>
            <label for="name">Nom</label>
            <br>
            <input type="text" id="updateName" value="${char.name}">
            <br>
            <label for="classe">Classe</label>
            <br>
            <select name="classe" id="updateClass" value="${char.classe}">
                <option value="">Choisis la classe de ton personnage</option>
                <option value="Humain">Humain</option>
                <option value="Ange">Ange</option>
                <option value="Démon">Démon</option>
                <option value="Mage">Mage</option>
                <option value="Guerrier">Guerrier</option>
                <option value="Vampire">Vampire</option>
            </select>
            <h3>Statistiques</h3>
            <div class="cut">
                <div id="cutOne">
                    <label for="level">Niveau</label>
                    <input type="number" id="updateLevel" value="${char.level}">
                    <label for="health">Santé</label>
                    <input type="number" id="updateHealth" value="${char.health}">
                    <label for="strength">Force</label>
                    <input type="number" id="updateStrength" value="${char.strength}">
                </div>
                <div id="cutTwo">
                    <label for="intelligence">Intelligence</label>
                    <input type="number" id="updateIntelligence" value="${char.intelligence}">
                    <label for="speed">Vitesse</label>
                    <input type="number" id="updateSpeed" value="${char.speed}">
                    <label for="defense">Défense</label>
                    <input type="number" id="updateDefense" value="${char.defense}">
                </div>
            </div>
            <br>
            <button id="updateChar">Valider</button>
        </section>`
        document.querySelector('#updateChar').addEventListener('click', () => {
            setTimeout(() => {
                let name = document.querySelector("#updateName").value;
                let classe = document.querySelector("#updateClass").value;
                let level = document.querySelector("#updateLevel").value;
                let intelligence = document.querySelector("#updateIntelligence").value;
                let health = document.querySelector("#updateHealth").value;
                let speed = document.querySelector("#updateSpeed").value;
                let strength = document.querySelector("#updateStrength").value;
                let defense = document.querySelector("#updateDefense").value;
                const newCharacter = new Character(name, classe, level, intelligence, health, speed, strength, defense);
                this.updateCharacter(newCharacter, char);
            }, 300);
        })
    }

    search(elem){
        let value = elem.value.toLowerCase();
        let nameInput = elem.name;
        let filteredArray = this.characters.filter(element => element[nameInput].toLowerCase() == value);
        this.displayCharacter(filteredArray);
    }
}
