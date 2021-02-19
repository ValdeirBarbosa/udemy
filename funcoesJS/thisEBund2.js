function Pessoa() {
    this.idade = 0;

    const self = this; // artificio para contornar e usar o this

    setInterval(function () {
        self.idade++;
        console.log(self.idade);

    }/*.bind(this)*/, 1000);
}


new Pessoa