import styled from 'styled-components'

export const IMAGE = styled.div`
    overflow: hidden;
    position: relative;
    img {
        width: 100%;
        height:100%;
        object-fit: cover;
        filter: grayscale(1);
        transition: .5s;
    }
    img:hover {
        filter: grayscale(0);
    }
    .message {
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1rem;
        position: absolute;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(100%);
        transition: .5s;
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgb(0 0 0 / 0%) 100%);

        p {
            margin-bottom: 0;
        }
        p:last-child {
            margin-top: .8rem;

        }
    }
    :hover .message {
        transform: translateY(0);
    }
`