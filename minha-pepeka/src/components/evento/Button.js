function Button(props){
return <button onClick={props.event}>{props.text}</button> /*é possivel retornar sem parenteses caso só tenha uma linha de codigo  */
}

export default Button;