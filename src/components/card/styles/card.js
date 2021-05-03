import styled from 'styled-components/macro'

export const Title = styled.p`
    font-size: 2.5rem;
    color: #e5e5e5;
    margin: 1rem 5rem;
    font-weight: 500;

    @media (max-width: 800px) {
        margin: 1rem 3rem;
    }

    @media (max-width: 600px){
        margin: 1rem 2rem;
        font-size: 2rem;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    &:last-of-type {
        margin-bottom: 0;
    }
`

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection === 'row' ? 'row' : 'column'};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};

    > ${Container}: first-of-type {
        @media (max-width 1000px) {
            margin-top: -15rem;
        }
    }

    @media (min-width: 1900px) {
        align-items: center;
        
    }

    @media (max-width: 600px) {
        margin: 3rem 0 5rem;
    }
`

export const SubTitle = styled.p`
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`

export const Text = styled.p`
    margin-top: .5rem;
    font-size: 1rem;
    color: #fff;
    user-select: none;
    display: none;
    line-height: normal;
`

export const FeatureText = styled.p`
    font-size: 1.8rem;
    color: #fff;
    font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
    text-shadow: 2px 2px 4px rgba(0, 0, 0);
`

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 36rem;
    margin: 2rem 5rem 2rem 0;
    background-position: top right;
    background-repeat: no-repeat;

    @media (max-width: 1000px) {
        margin-right: 3rem;
    }

    @media (max-width: 800px) {
        height: auto;
        margin-right: 4vw;

        ${Title} {
            margin-bottom: 1rem;
        }

        ${FeatureText} {
            font-size: 2rem;
            line-height: 1.4;
        }
    }

    @media (max-width: 600px) {

        ${Title} {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }

        ${FeatureText} {
            font-size: 1.5rem;
            line-height: 1.4;
        }

        background-position: bottom center;
        margin-top: 0;
        margin-right: 0;
    }

    

`

export const FeatureTitle = styled(Title)`
    font-size: 5rem;
    margin-left: 0;
`

export const FeatureClose = styled.button`
    color: #fff;
    position: absolute;
    cursor: pointer;
    right: 2rem;
    top: 2rem;
    border: 0;
    background-color: rgba(0,0,0, .5);
    border-radius: 50%;

    img {
        filter: brightness(0) invert(1);
        width: 2.4rem;
    }

    @media (max-width: 600px) {
        right: 1.5rem;
        top: 1.5rem;

        img {
            width: 2rem;
        }
        
        }

`

export const Maturity = styled.div`
    background: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
    border-radius: 10%;
    padding: .5rem;
    text-align: center;
    color: #fff;
    font-weight: bold;
    margin-right: 1rem;
    font-size: 2rem;
`

export const Content = styled.div`
    margin: 5rem;
    max-width: 50rem;
    line-height: normal;

    @media (max-width: 1000px) {
        margin: 3rem;
        max-width: none;
    }

    @media (max-width: 600px) {
        margin: 2rem;
        max-width: none;
    }
`

export const Meta = styled.div`
    display: None;   
    position: absolute;
    bottom: 0;
    padding: 1rem;
    width: 100%;
    background: #0000008f;

    @media (max-width: 600px) {
        padding: .5rem;
    }

`

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1920px;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    margin-right: .5rem;
    position: relative;
    cursor: pointer;
    transition: all .5s ease-in-out;

    &:focus {
        outline: 1px solid #fff;
    }

    &:hover {
        transform: scale(1.3);
        z-index: 99;
        outline: 1px solid #fff;

        ${Meta},${SubTitle} {
            display: block;
            z-index: 100;
        }
    }

    @media (max-width: 600px) {

        &:hover {
            transform: scale(1);

            ${Meta},${SubTitle} {
            display: none;
        }
        }
    }


    @media (min-width: 1000px) {
        &:hover ${Text} {
            display: block;
            z-index: 100;
        }
    }

    &:first-of-type {
        margin-left: 5rem;

        @media (max-width: 1000px) {
            margin-left: 3rem;
        }

        @media (max-width: 600px) {
            margin-left: 0;   
    }
    }

    &:last-of-type { 
        margin-right: 5rem;

        @media (max-width: 1000px) {
            margin-right: 3rem;
        }

        @media (max-width: 600px) {
            margin-right: 0;   
    }
    }

    
`

export const Image = styled.img`
    border: 0;
    width: 100%;
    max-width: 30.5rem;
    cursor: pointer;
    height: auto;

    @media (max-width: 600px) {
        height: 10rem;
        object-fit: cover;
        border-radius: 5px;
    }
`