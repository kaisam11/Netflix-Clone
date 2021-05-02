import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 2rem;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Input = styled.input`
    font-size: 2rem;
    max-width: 45rem;
    margin-top: 2rem;
    width: 100%;
    border: 0;
    padding: 1rem;
    height: 6rem;
    box-sizing: border-box;

    @media (max-width: 600px) {
        font-size: 1.5rem;
        height: 5rem;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: #e50914;
    margin-top: 2rem;
    color: #fff;
    padding: 1.5rem 3.2rem;
    font-size: 2.6rem;
    font-weight: 400;
    border: none;
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:hover {
        background-color: #f40612;
    }

    @media (max-width: 1000px) {
        font-size: 1.6rem;
        margin-top: 2rem;
    }

    @media (max-width: 600px) {
        padding: 1rem 8vw;
    }

    img {
        margin-left: 1rem;
        filter: brightness(0) invert(1);
        width: 2.4rem;

        @media (max-width:100px) {
            width: 1.6rem;
        }
    }
`

export const Text = styled.p`
    font-size: 1.92rem;
    color: #fff;
    text-align: center;
    margin-top: 2rem;

    @media (max-width: 600px) {
        font-size: 1.6rem;
        line-height: 2.2rem;
    }
`

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`