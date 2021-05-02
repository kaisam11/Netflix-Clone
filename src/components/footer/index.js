import React from 'react'
import {Container, Row, Column, Link, Title, Text, Break} from './styles/footer'

export default function Footer ({ children}) {
    return (
        <Container>{children}</Container>
    )
}

Footer.Row = function Footer({ children}) {
    return <Row>{children}</Row>
}

Footer.Column= function Footer({ children}) {
    return <Column>{children}</Column>
}

Footer.Link = function Footer({ children}) {
    return <Link>{children}</Link>
}

Footer.Title = function Footer({ children}) {
    return <Title>{children}</Title>
}

Footer.Text = function Footer({ children}) {
    return <Text>{children}</Text>
}

Footer.Break = function Footer({ children}) {
    return <Break>{children}</Break>
}