import React, {useState, useRef} from "react";
export default function App(){

    // STATE
    const [listaTarefas, setListaTarefas] = useState(() => { return [] })
    const [tarefa, setTarefa] = useState(() => { return ''})
    
    //REF
    const idTarefa = useRef(0)

    // METODOS
    function adicionarTarefa(){
        setListaTarefas(old => { return [...old, {id: idTarefa.current, texto: tarefa}] })
        idTarefa.current = idTarefa.current + 1
        setTarefa('')
    }

    function limparTarefas(){
        setListaTarefas(old => { return [] })
            idTarefa.current = 0
    }

    function removerTarefa(id){
        const tmp = listaTarefas.filter(tarefa => tarefa.id !== id  )
        setListaTarefas(tmp)
    }

    return (
        <>
            <h3>LISTA DE TAREFAS</h3>
            <hr />
            <input type="text" value={tarefa} onChange={(evento) => { setTarefa(evento.target.value)}} />
            <div>
                <button onClick={adicionarTarefa}>Adicionar</button>
                <button onClick={limparTarefas}>Limpar Tudo</button>
            </div>
            <hr />
            <p>Tarefas:</p>
            {listaTarefas.map((tarefa) => {
                return <p key={tarefa.id}>{tarefa.texto} - <span onClick={() => { removerTarefa(tarefa.id)} }>[remover]</span> </p>
            })}
        </>
    )
}