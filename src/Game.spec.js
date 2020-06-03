/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Game } from './app'
import './app.css'
// import the module with exports we want to mock
import * as utils from './utils'

describe('Game', () => {
  it('declares winner', () => {
    cy.stub(utils, 'calculateWinner').returns('X')
    mount(<Game />)
    cy.contains('Winner: X')
  })
})
