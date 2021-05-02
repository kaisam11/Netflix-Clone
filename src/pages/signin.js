import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/headerContainer'
import { FooterContainer } from '../containers/footerContainer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signin() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = password === '' || email === ''

    const handleSignin = (e) => {
        e.preventDefault()
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmail('')
                setPassword('')
                setError(error.message)
            })
        }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error data-testid="error">{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input type="email" placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <Form.Input type="password" placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn more.</a></Form.TextSmall>
                    
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
