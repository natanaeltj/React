function Evento({numero}){


    function meuEvento(){
    window.alert(`VOCÊ CLICOU NA MINHA PEPEKA ASSEDIADOR!!!! ${numero}`);
}
    return(
        <>
        <p>Clique para disparar o evento</p>
        <button onClick={meuEvento} >Clica nessa pepeka vai descarado </button>
        </>
    )
}

export default Evento;
