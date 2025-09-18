import styles from './Ap.module.css'
import { useState } from "react";

const listaDeTarefas = [] //
let contagem = listaDeTarefas.length

function Ap(){


function adicionarTarefa(e){
    e.preventDefault()
    listaDeTarefas.push(tarefa)
    console.log(listaDeTarefas)
}

const [tarefa, setTarefa] = useState();    


    return(
        <div className={styles.teste}>
            <h1>LISTA DE TAREFAS</h1>
            <br />
            <form onSubmit={adicionarTarefa}>
                <input id='Tarefa' name='tarefa' type="text" placeholder='Digite sua tarefa' onChange={(e) => setTarefa(e.target.value)} />
                <input type="submit" value="Adicionar tarefa" onClick={adicionarTarefa}/>
            </form>

            <p>Tarefas pendentes:{contagem}</p>
            <p>Tarefas concluidas</p>
        <section className={styles.lista}>
            
             <button>Remover</button> 
        </section>
        </div>

    )
}

export default Ap;