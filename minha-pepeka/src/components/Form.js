import { useState } from "react";


function Form(){

    function cadastrarUsuario(e){
         e.preventDefault() /* previne o comportamento padrão do formulário que é de atualizar a página */
         console.log(name)
         console.log(password)
        alert("Usuário cadastrado")
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()
   

    return(
        <div>
            <h1>Formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="Name" name="name"  placeholder="Digite seu nome completo" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="Senha" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="enviar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;