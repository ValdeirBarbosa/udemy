const vo = {attr1:'A'}
const pai = {__proto__:vo,attr2:'B'}
const filho  = {__proto__:pai,attr3:'C'}

//console.log(filho.attr1,filho.attr2,filho.attr3)


const carro ={
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual+ delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} km/H de ${this.velMax} km/H`
    }
}

const ferrari = {
    modelo:'F40',
    velMax:340 // shadowing
}

const volvo ={
    modelo:'V40',
    status (){
        return `${this.modelo}: ${super.status()}`
    }
}
 console.log(ferrari)
 console.log(volvo)

 Object.setPrototypeOf(ferrari,carro)
 Object.setPrototypeOf(volvo,carro)

ferrari.acelerarMais(20)
console.log(volvo.status())