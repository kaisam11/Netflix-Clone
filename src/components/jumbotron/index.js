import React from 'react'
import { Inner, Item, Container, Pane, Title, SubTitle, Image } from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row'}) {
    return (
        <Item>
            <Inner  direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children}) {
    return <Container>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({ children}) {
    return <Pane>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({ children}) {
    return <Title>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children}) {
    return <SubTitle>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({ ...image }) {
    return <Image {...image} />
}