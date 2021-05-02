import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: .8rem solid #222;
    text-align: center;
    padding: 15rem 10rem;

    @media (max-width: 600px) {
        padding: 5rem 5vw;
    }
`

export const Title = styled.h1`
    color: #fff;
    max-width: 64rem;
    font-size: 5rem;
    font-weight: 700;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 3rem;
    }
`

export const SubTitle = styled.h2`
    color: #fff;
    font-size: 2.6rem;
    font-weight: normal;
    margin: 1.6rem auto 0;

    @media (max-width: 600px) {
        font-size: 1.8rem;
    }
`