import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/headerContainer'
import { FooterContainer } from '../containers/footerContainer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'


export default function Signup() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName === '' || password === '' || email === ''

    const handleSignup = (e) => {
        e.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    history.push(ROUTES.BROWSE)
                })
            })
            .catch((error) => {
                setFirstName('')
                setEmail('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input type="text" placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />

                        <Form.Input type="email" placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <Form.Input type="password" placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
                            Sign up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn more.</a></Form.TextSmall>
                    
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
