// Função em Javascriot é First class object 
// Higher-order functional 


//funçãi literal 
function func1(){};

// função como parametro 


const result = function func2(){};


// armazenar em um atributo de objeto]
const obj ={}
obj.falar = function (){return 'Opa!'};  // com atributo implicito ( atrubuto adquirido na hora, o objeto nao foi criado com o atributo )
console.log(obj.falar());


//passar função como parametro 

function run(fun){
    fun();
}
run(function (){console.log('Executando...')});


// uma funcção pore retornar ou conter uma função 

function soma(a,b){
    return function (c){
        console.log(a + b + c);
    }
}

soma(1,1)(10); // o segundo parentese e o parametro passado para função de retorno dentro da função soma


// pode ser usado da forma abaixo também 
const res = soma(1,1);
res(10);

