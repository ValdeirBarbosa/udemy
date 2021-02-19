// o this na funçãi arrow sempre referencia a proria função 

function Pessoa(){

    this.idade = 0;
    setInterval(()=>{
        this.idade++;
        console.log(this.idade);
    },1000);
}

 new  Pessoa

