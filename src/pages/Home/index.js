import React, { useEffect, useState} from "react";
import { api } from "../../components/services/api";
import { Container } from "./styles";
import { TableList } from "../../components/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export function Home() {
    const [listArray, setListArray] = useState([]);

    useEffect (() => {
        api.get("todos").then((response) => {
            // eslint-disable-next-line array-callback-return
            const array = [];
            response.data.map((result) => {
                const data = {
                    id: result.id,
                    title: result.title,
                    completed: result.completed,
                };
                array.push(data);
            });
            setListArray([...listArray, array]);
            console.log({ listArray });
        });
    }, []);

    return (
        <Container>
            <h1>Lista de Tarefas</h1>
            <div className="div-list">
                <TableList listArray={listArray} />
            </div>
        </Container>
    );
}
