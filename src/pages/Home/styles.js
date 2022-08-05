import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        text-align: center;
    }

    .div-list {
        /* flex: 1; */
        width: 100%;
        height: 500px;
        overflow-y: scroll;
        padding: 0 200px;
    }
`;