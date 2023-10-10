import React from 'react';
import { Spinner } from 'react-bootstrap'

export default function Loading({ col = 4 }) {
  return (
    <tr>
      <td colSpan={col} className='text-center'>
        <Spinner animation='border'/>
      </td>
      </tr>
    )
}