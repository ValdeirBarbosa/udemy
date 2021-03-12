


function valorPedido(cod,quant) {
  switch (cod) {

    case 100:
        return `R$${quant * 3.00}`
      break;
    case 200:
        return `R$${quant * 4.00}`
      break;
    case 300:
        return `R$${quant * 5.5}`
      break;
    case 400:
          return `R$${quant * 7.5}`
      break;
    case 500:
          return `R$${quant * 3.5}`
      break;
    case 600:
          return `R$${quant * 2.8}`
      break;

    default:
    return `Produto não existe`

  }

}

console.log(valorPedido())
