import Table from "react-bootstrap/Table";

export function TableList(props) {
    return (
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Código da Tarefa</th>
                    <th>Descrição</th>
                    <th>Realizada</th>
                </tr>
            </thead>
            <tbody>
                {props.listArray[0]?.map((result) => (
                    <tr>
                        <td>{result.id}</td>
                        <td>{result.title}</td>
                        <td>{!result.completed ? "Não" : "sim"}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}