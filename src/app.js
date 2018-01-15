import React from 'react'
import { render } from 'react-dom'
import TableRows from './TableRows'
import { products } from './products'

render(<TableRows products = {products}/>, document.getElementById('container'));
