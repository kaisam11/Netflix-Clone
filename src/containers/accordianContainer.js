import React from 'react'
import { Accordian, OptForm } from '../components'
import faqsData from '../fixtures/faqs.json'

export const AccordianContainer = () => {
    return (
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
            {faqsData.map(faqs =>
                <Accordian.Item key={faqs.id}>
                    <Accordian.Header>{faqs.header}</Accordian.Header>
                    <Accordian.Body>{faqs.body}</Accordian.Body>
                </Accordian.Item>
            )}
            <OptForm>
                <OptForm.Input placeholder='Email Address' />
                <OptForm.Button>Get started</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>
                    Ready to watch? Enter your email address to create or restart membership
                </OptForm.Text>
            </OptForm>
        </Accordian>
    )
}
