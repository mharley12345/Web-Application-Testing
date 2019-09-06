import React from 'react'

const Display = props =>{


return (
< div className='display'>
  
     <div className="strikes">
      <h2>Strikes</h2>
      <div>{props.strikes}</div>
      </div>
      <div className="balls">
      <h2>Balls</h2>
      <div>{props.balls}</div>
     </div>
     <div  className='outs'>
     <h2>Outs</h2>
     <div>{props.outs}</div>
     </div>
  </ div>

)
}
export default Display 