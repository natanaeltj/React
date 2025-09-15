
// Propriedades - props podem ser passadas para componentes são parecidas com classes no css
function SayMyName(props){    
return(
    <div>
        <p>Fala aí {props.nome}, suave?</p>
    </div>
)
}

export default SayMyName;