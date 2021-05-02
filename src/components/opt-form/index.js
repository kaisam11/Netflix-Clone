import React from 'react'
import { Container, Input, Button, Text, Break } from './styles/opt-form'

export default function OptForm({ children, ...props }) {
    return (
        <Container {...props}>{children}</Container>
    )
}

OptForm.Input = function OptFormInput({ ...props }) {
    return <Input {...props} />
}

OptForm.Button = function OptFormButton({ children }) {
    return <Button>
        {children} <img src="/images/icons/chevron-right.png" alt='Try Now' />
    </Button>
}

OptForm.Text = function OptFormText({ children }) {
    return <Text>{children}</Text>
}


OptForm.Break = function OptFormBreak({...props}) {
    return <Break {...props} />
}