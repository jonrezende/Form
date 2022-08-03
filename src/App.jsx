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
        idTarefa.current = 0
    }

    function limparTarefas(){
        setListaTarefas(old => { return [] })
    }

    return (
        <>
            <h3>GESTOR DE TAREFAS</h3>
            <hr />
            <input type="text" value={tarefa} onChange={(evento) => { setTarefa(evento.target.value)}} />
            <div>
                <button onClick={adicionarTarefa}>Adicionar</button>
                <button onClick={limparTarefas}>Limpar Tudo</button>
            </div>
            <hr />
            <p>Tarefas:</p>
            {listaTarefas.map((t) => {
                return <p key={t.id}>{t.texto}</p>
            })}
        </>
    )
}