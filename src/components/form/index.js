import React from 'react'
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/form'

export default function Form({ children}) {
    return (
        <Container>{children}</Container>
    )
}

Form.Base = function FormBase({ children,...props }) {
    return <Base {...props}>{children}</Base>
}

Form.Error = function FormError({ children }) {
    return <Error>{children}</Error>
}

Form.Title = function FormTitle({ children }) {
    return <Title>{children}</Title>
}

Form.Text = function FormText({ children }) {
    return <Text>{children}</Text>
}

Form.TextSmall = function FormTextSmall({ children }) {
    return <TextSmall>{children}</TextSmall>
}

Form.Link = function FormLink({ to, children }) {
    return <Link to={to}>{children}</Link>
}

Form.Input = function FormInput({ children,...props }) {
    return <Input {...props}>{children}</Input>
}

Form.Submit = function FormSubmit({ children, ...props}) {
    return <Submit {...props}>{children}</Submit>
}

