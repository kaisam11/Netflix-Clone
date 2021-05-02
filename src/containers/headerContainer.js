import React, {useState, useEffect} from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function HeaderContainer({ children }) {

    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt='home' />
                <Header.ButtonLink to={ROUTES.SIGN_IN} alt='signin'>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
