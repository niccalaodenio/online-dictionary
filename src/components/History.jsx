import React from 'react'
import { Flex } from '../styles/StyledHistory.style'
const History = (props) => {
  const {set, countsetter} = props
  function f(i){
    console.log(i)
    set(() => i)
    countsetter(p => p+1)
  }
  return (
        <Flex> 
          <h2 className='ml'>Recent Search Word</h2>
        <div>{props.sr.map((i) => (i && <li key={i} onClick={() => f(i)}> {i}</li>))}</div>
        </Flex>
  )
}

export default History