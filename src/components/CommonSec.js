import React from 'react'
import { Container } from 'react-bootstrap'
import './css/CmmonSec.css'

const CommonSec = ({title}) => {
  return (
    <section className='comon_Sec'>
        <Container className='text-center'>
            <h1 className='text-center'>{title}</h1>
        </Container>
    </section>
  )
}

export default CommonSec