function Pessoa({nome, idade, profissao, foto}){ // Para simplificar a chamada dos props, pode-se desestruturar os mesmos, deixando o codigo muito mais limpo
    return(
        <div>
            <h2>Nome: {nome}</h2>
            <h3>Idade: {idade}</h3>
            <h3>Profissão: {profissao}</h3>
            <img src={foto} alt="anime photo"></img>
        </div>
    )
}

export default Pessoa;