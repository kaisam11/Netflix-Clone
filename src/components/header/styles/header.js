import styled from 'styled-components/macro'
import {Link as ReactRouterLink} from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

    
    @media (max-width: 1100px) {
        ${'' /* ${({ dontShowOnSmallViewport }) => dontShowOnSmallViewport && `background: none;` } */}
        background-position: top;
    }
`

export const Group = styled.div`
    display: flex;
    align-items: center;
    }
`

export const Container = styled.div`
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    padding: 3rem 5rem;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width:800px) {
        padding: 2rem 5vw;
        text-align: center;
    }

`

export const Logo = styled.img`
    height: 3.6rem;
    width: 13.4rem;

    @media (min-width: 1449) {
        height: 4.5rem;
        width: 16.7rem;
    }

    @media (max-width: 800px){
        width: 10rem;
    }

    @media (max-width: 600px){
        width: 8rem;
    }
`

export const LogoMin = styled.img`
    width: auto;
    height: 5rem;
    margin-left: -1rem;
`

export const ButtonLink = styled(ReactRouterLink)`

    display: block;
    background-color: #e50914;
    width: 8.4rem;
    height: fit-content;
    color: #fff;
    border: 0;
    font-size: 1.5rem;
    border-radius: .3rem;
    padding: .8rem 1.7rem;
    text-decoration: none;
    cursor: pointer;

    &:hover { 
        background-color: #f40612;
        }
`

export const Feature = styled(Container)`
    padding: 15rem 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;
    margin: 0 5rem;

    @media (max-width: 800px) {
        padding: 2rem 5vw;
        margin: 0;
        width: 100%;
    }
`

export const Text = styled.p`
    color: #fff;
    font-size: 2rem;
    line-height: 1.5;
    text-shadow: 2px 2px 4px rgba(0, 0, 0);

    @media (max-width:800px) {
        margin-bottom: 5rem;
    }

    @media (max-width: 600px) {
        display: none;
    }
`

export const FeatureCallOut = styled.h2`
    color: #fff;
    font-size: 7rem;
    line-height: normal;
    font-weight: bold;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0);

    @media (max-width: 800px) {
        font-size: 5rem;
        margin-top: 15rem;
    }
`

export const Link = styled.p`
    color: #fff;
    margin: 0 3rem 0 4rem;
    cursor: pointer;
    font-size: 2rem;
    padding: .5rem 1rem;
    letter-spacing: 1px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .5);
    transition: all .2s ease-in-out;
    border-radius: 5px;

    &:hover {
        background: rgba(229, 9, 45);
        
    }

    &:last-of-type {
        margin: 0;
    }

    @media (max-width: 600px) {
        font-size: 1.6rem;
        margin: 0 .5rem 0 1rem;
    }
`

export const Picture = styled.button`
    background: url(${({src}) => src});
    background-size: contain;
    border: 0;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
`

export const Dropdown = styled.div`
    display: none;
    background: #000;
    position: absolute;
    padding: 1rem;
    width: 15rem;
    top: 3.2rem;
    right: 0;

    button {
        margin-right: 1rem;
    }

    p {
        font-size: 1.5rem;
    }

    ${Group}: last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 2rem;

        &:last-of-type {
            margin-bottom: 0
        }

        ${Link}, ${Picture} {
            cursor: default;
        }
    }

`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2rem;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown}{
        display: flex;
        flex-direction: column;
        z-index: 100000;
    } 
`

export const Search = styled.div`
    display: flex;
    align-items: center;
    
    svg {
        color: #fff;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        display: none;
    }

`

export const SearchIcon = styled.button`
    cursor: pointer;
    background: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 1.6rem;
    }
`

export const PlayButton = styled.button`
    box-shadow: 0 .6vw 1vw -.4vw rgba(0,0,0, .35);
    background: #e6e6e6;
    border: 0;
    padding: 1rem;
    border-radius: 5px;
    width: 13rem;
    font-size: 2rem;
    font-weight: 500;
    margin: 3rem 0;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        background: #ff1e1e;
        color: #fff;
    }

    @media (max-width: 800px) {
        margin: 0 auto;
    }

    @media (max-width: 600px) {
        width: 9rem;
        font-size: 1.5rem;
    }

`

export const SearchInput = styled.input`
    background: #44444459;  
    color: #fff;
    border: 1px solid white;
    transition: all .5s ease-out;
    height: 3rem;
    font-size: 1.4rem;
    padding: 0 1rem;
    margin-left: ${({active}) => (active === true ? '1rem' : '0')};
    padding: ${({active}) => (active === true ? '0 1rem' : '0')};
    opacity: ${({active}) => (active === true ? '1' : '0')};
    width: ${({active}) => (active === true ? '20rem' : '0px')};
`