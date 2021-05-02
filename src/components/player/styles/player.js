import styled from 'styled-components/macro'

export const Container = styled.div``

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

export const Inner = styled.div`
    position: relative;
    width: 90vw;
    max-width: 90rem;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }
`

export const Button = styled.button`
    background: rgba(229, 9, 45);
    border: 0;
    border-radius: 5px;
    width: 13rem;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }

    @media (max-width: 600px) {
        width: 9rem;
        font-size: 1.5rem;
    }
`