import React from 'react'
import { renderEmail, renderPassword, renderPasswordConfirm } from '../Form'
import { Field } from 'redux-form'
import { shallow, mount } from 'enzyme'
import {FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

describe('test email',() => {
    it('test empty email null status', () => {
        const input = <div>
            {renderEmail()}
            {renderPassword('d')}
            </div>
        expect(input.props.children[0].props.status).toBe(null)
        expect(input.props.children[1].props.status).toBe('error')
    })

    it('test email success', () => {
        const input = shallow(renderEmail("test@test.com"))
        expect(input).not.toContainReact(<HelpBlock>length must be more than 10</HelpBlock>)
    })

    it('test email length', () => {
        const input = shallow(renderEmail("test"))
        expect(input).toContainReact(<HelpBlock>length must be more than 10</HelpBlock>)
    })

    it('test email regex', () => {
        const input = shallow(renderEmail("testtesttesttest"))
        expect(input).toContainReact(<HelpBlock>must be in email format</HelpBlock>)
    })

})

describe('test password', () => {

    it('test password success', () => {
        const input = shallow(renderPassword("test1234"))
        expect(input).not.toContainReact(<HelpBlock>password must be more that 8 characters</HelpBlock>)
    })

    it('test password length', () => {
        const input = shallow(renderPassword("test12"))
        expect(input).toContainReact(<HelpBlock>password must be more that 8 characters</HelpBlock>)
    })

    it('test password regex', () => {
        const input = shallow(renderPassword("testtest"))
        expect(input).toContainReact(<HelpBlock>password must have capital and small letter and number</HelpBlock>)
    })

})

describe('test password Confirm', () => {

    it('test password confirmation empty not success', () =>{
        const input = <div>
            {renderPassword('password')}
            {renderPasswordConfirm('password', null)}
        </div>
        expect(input.props.children[1].props.status).toBe(null)
    })

    it('test password and password confirmation equal', () =>{
        const input = <div>
            {renderPassword('password')}
            {renderPasswordConfirm('password', 'password')}
        </div>
        expect(input.props.children[1].props.status).toBe('success')
    })

    it('test password and password confirmation equal', () =>{
        const input = <div>
            {renderPassword('password')}
            {renderPasswordConfirm('password', 'passwor')}
        </div>
        expect(input.props.children[1].props.status).toBe('error')
    })
})