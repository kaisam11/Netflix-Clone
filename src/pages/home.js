import React from 'react'
import { HeaderContainer } from '../containers/headerContainer'
import { JumbotronContainer } from '../containers/jumbotronContainer'
import { FooterContainer } from '../containers/footerContainer'
import { AccordianContainer } from '../containers/accordianContainer'
import { OptForm, Feature } from '../components'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programes and more</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder='Email Address' />
                        <OptForm.Button>Get started</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Ready to watch? Enter your email address to create or restart membership
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordianContainer />
            <FooterContainer />
        </>
    )
}
