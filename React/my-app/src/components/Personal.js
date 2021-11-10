function Personal({name,idade,profissao, src}){ 
return(
  <>
    <h2>Nome: {name} </h2>
    <p> Idade: {idade} </p>
    <p> Profissao: {profissao} </p>
    <img src={src} alt="imagem qualquer" />
  </>
);
}

export default Personal;