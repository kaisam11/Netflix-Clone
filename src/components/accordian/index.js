import React, { useState, useContext, createContext } from 'react'
import {Container, Inner, Title, Item, Header, Body} from './styles/accordian'

const ToggleContext = createContext()

export default function Accordian({ children }) {
    return (
        <Container>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordian.Title = function AccordianTitle({ children }) {
    return <Title>{children}</Title>
}

Accordian.Item = function AccordianItem({ children }) {
    const [toggleShow, setToggleShow] = useState(false)

    return <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
        <Item>{children}</Item>
    </ToggleContext.Provider>
}

Accordian.Header = function AccordianHeader({ children }) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return <Header onClick={() => setToggleShow(toggleShow => !toggleShow)}>
    {children}
    {toggleShow ? (<img src='/images/icons/close-slim.png' alt='Close'/>) : 
    (<img src='/images/icons/add.png' alt='Open' />)}
    </Header>
}

Accordian.Body = function AccordianBody({ children }) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return toggleShow? <Body>{children}</Body> : null
}