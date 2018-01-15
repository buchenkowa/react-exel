import React from 'react'
import TableCell from './TableCell'

function TableRows(props) {
  const { products } = props;
  const row = products.map((product) => <div key={product.check.common.id}><TableCell product = {product} /></div>)
  console.log(products);
  return (
    <div>
      <h1>Excel Table</h1>
      <section>Table body</section>
      { row }
    </div>
  )

}

export default TableRows
