import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import 'font-awesome/css/font-awesome.min.css';

const $app = document.querySelector('#app')

render(<App />, $app)
