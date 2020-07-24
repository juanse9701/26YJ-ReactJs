import styled from 'styled-components'

export const GRID = styled.section`
    display: grid;
    gap: 2vmin;
    grid-template-columns: repeat(4, auto);
    grid-auto-flow: dense;

    div:first-child {
        grid-column-start: span 2;
        grid-row-start: span 2;
    }

    div:nth-child(6) {
        grid-column-start: span 2;
        grid-row-start: 3;
    }

    div:nth-child(7) {
        grid-row-start: 1;
    }
`

export const POEMA = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;

    article p {
        font-size: 1.3em;
    }

    .autor {
        font-weight: bold;
        font-size: 1.1em;
    }
`