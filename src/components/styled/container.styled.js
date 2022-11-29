import styled from "styled-components"

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
@media (max-width: 786px) {
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
    margin: auto;
    }
`