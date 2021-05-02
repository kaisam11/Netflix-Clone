import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 60rem;
    background-color: rgba(0,0,0, .75);
    border-radius: .5rem;
    margin: 0 auto 10rem;
    width: auto;
    max-width: 45rem;
    padding: 6rem 6.8rem 4rem;

    @media (max-width: 600px) {
        padding: 0 8vw;
    }
`

export const Error = styled.div`
    background: #e87c03;
    border-radius: .5rem;
    font-size: 1.4rem;
    margin: 0 0 1.6rem;
    color: #fff;
    padding: 1.5rem 2rem;
`

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 45rem;
    width: 100%;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 2.6rem;
`

export const Text = styled.p`
    color: #737373;
    font-size: 1.6rem;
    font-weight: 500;
`

export const TextSmall = styled.p`
    margin-top: 1rem;
    font-size: 1.3rem;
    line-height: normal;
    color: #8c8c8c;

    a {
        color: dodgerblue;
    }
`

export const Link = styled(ReactRouterLink)`
    color: #fff;
    text-decoration: none;
    transition: all .2s ease;

    &:hover {
        text-decoration: underline;
    }
`

export const Input = styled.input`
    background: #333;
    border-radius: .4rem;
    border: 0;
    font-size: 1.6rem;
    color: #fff;
    height: 5rem;
    line-height: 5rem;
    padding: .5rem 2rem;
    margin-bottom: 1.5rem;
    transition: all .3s;

    &:last-of-type {
        margin-bottom: 1.8rem;
    }

    &:focus {
        background: #454545;
    }
`

export const Submit = styled.button`
    background-color: #e50914;
    color: #fff;
    border-radius: .4rem;
    font-size: 1.6rem;
    font-weight: bold;
    margin: 2.4rem 0 2rem; 
    padding: 1.6rem;
    border: 0;
    cursor: pointer;

    &:disabled {
        opacity: .5;
    }
`