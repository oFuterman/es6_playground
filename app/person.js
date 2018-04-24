

class Person {
    constructor(name){
        this.name=name;
    }

    sleep(hours){
        return `<h1>im going to sleep for ${hours} hours.</h1>`;
    }

    drink(cups){
        return `<h1>im going to drink ${cups} of water.</h1>`;
    }

    speak(message){
        return `<h1>${this.name} said: ${message}.</h1>`;
    }
}


class SuperPerson extends Person {
    constructor(heroName, name){
        super(name);

        this.heroName=heroName;
    }

    sayHeroName(){
        return this.speak(`im ${this.heroName}`);
    }

    xRay(){
        return this.speak('all them booties');
    }
}

export default SuperPerson;