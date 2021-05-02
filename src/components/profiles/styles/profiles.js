import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    max-width: 80%;
`

export const Title = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 4.8rem;
    text-align: center;
    font-weight: 500;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`

export const List = styled.ul`
    display: flex;
    flex-direction: row;
`

export const Name = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 2rem;   
    margin-top: 2rem; 

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }

    @media (max-width: 600px) {
        margin-top: 1rem;
    }
`

export const Picture = styled.img`
    width: 100%;
    max-width: 15rem;
    height: auto;
    border: 3px solid #000;
    cursor: pointer;

    @media (max-width: 600px) {
        width: 10rem;
    }
`

export const Item = styled.div`
    max-height: 20rem;
    max-width: 20rem;
    list-style-type: none;
    text-align: center;
    margin-right: 3rem;

    &:hover > ${Picture} {
        border: 3px solid #fff;
    }

    &:hover ${Name} {
        font-weight: bold;
        color: #fff;
    }

    &:last-of-type {
        margin-right: 0;
    }
`