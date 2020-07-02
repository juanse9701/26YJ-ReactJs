import styled from 'styled-components'

export const GRID = styled.section`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    div {
        img {
            width: 100%;
            object-fit: contain;
        }
    }
`