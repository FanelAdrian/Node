class Professional {
    constructor(name, age, weight, height) {

        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    information() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.weight);
        console.log(this.height);
    }

}
class Professional2 {
    constructor(name, age, weight, height,id) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    information() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.id);
    }

}

module.exports = { Professional,Professional2 };

