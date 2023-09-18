
const somar  = (req,res)=>{
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  if(!isNaN(num1) && !isNaN(num2)){
    const result = num1 + num2;
    return res.send(`${result}`)
  }
  return res.send('Valor Inserido Inválido!')
}

const subtrair  = (req,res)=>{
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  if(!isNaN(num1) && !isNaN(num2)){
    const result = num1 - num2;
    return res.send(`${result}`)
  }
  return res.send('Valor Inserido Inválido!')
}

const multiplicar  = (req,res)=>{
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  if(!isNaN(num1) && !isNaN(num2)){
    const result = num1 * num2;
    return res.send(`${result}`)
  }
  return res.send('Valor Inserido Inválido!')
}

const dividir  = (req,res)=>{
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  if(!isNaN(num1) && !isNaN(num2)){
    const result = num1 / num2;
    return res.send(`${result}`)
  }
  return res.send('Valor Inserido Inválido!')
}

module.exports = {
  somar,
  multiplicar,
  dividir,
  subtrair
}