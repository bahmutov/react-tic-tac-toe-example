/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Square } from './app'

describe('Square', () => {
  it('renders', () => {
    mount(<Square />)
  })
})
