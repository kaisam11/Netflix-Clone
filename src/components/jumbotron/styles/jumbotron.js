import styled from 'styled-components/macro'

export const Item = styled.div`
    display: flex;
    border-bottom: .8rem solid #222;
    padding: 5rem;
    color: white;
    overflow: hidden;

    @media (min-width: 1900px) {
        padding: 5rem 15vw;
    }

    @media (max-width: 600px) {
        padding: 5rem 5vw;
    }
`

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    align-items: center;
    max-width: 110rem;
    margin: 0 auto;
    width: 100%;

    @media (max-width:1000px) {
        flex-direction: column;
    }
`

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        text-align: center;
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    line-height: 1;
    margin-bottom: 2rem;

    @media (max-width:600px) {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }
`

export const SubTitle = styled.h2`
    font-size: 2.6rem;
    font-weight: normal;
    line-height: 3.5rem;

    @media (max-width: 600px) {
        font-size: 1.8rem;
        line-height: 1.2;
    }
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;

`

export const Container = styled.div`

    @media (max-width:1000px) {
        ${Item}: last-of-type h2 {
            margin-bottom: 5rem;
        }
    }
`

