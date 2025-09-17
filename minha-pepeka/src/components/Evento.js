import Button from "./evento/Button";

function Evento(){


    function meuEvento(){
    window.alert(`VOCÊ CLICOU NA MINHA PEPEKA ASSEDIADOR!!!!`);
}
    return(
        <>
        <p>Clique para disparar o evento</p>
        <Button event={meuEvento} text="Clique na pepeka" />
        </>
    )
}

export default Evento;
