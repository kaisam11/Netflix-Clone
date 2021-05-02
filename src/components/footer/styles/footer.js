import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    padding: 7rem 5rem 3rem;
    margin: auto;
    max-width: 100rem;
    flex-direction: column;

    @media (max-width: 600px) {
        padding: 5rem 8vw 2.5rem;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1.5rem;
    margin-bottom: 4rem;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(auto-fill, minmax(35vw, 1fr));
        margin-bottom: 2rem;
    }
`

export const Link = styled.a`
    color: #757575;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline
    }

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`

export const Title = styled.p`
    font-size: 1.6rem;
    color: #757575;
    margin-bottom: 4rem;
`

export const Text = styled.p`
    font-size: 1.3rem;
    color: #757575;
`

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`