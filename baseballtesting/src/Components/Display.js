import React from 'react'

const Display = props =>{


return (
<>
     <div className="strikes">
      <h2>Strikes:</h2>
      <div>{props.strikes}</div>
      </div>
      <div className="balls">
      <h2>Balls:</h2>
      <div>{props.balls}</div>
     </div>
     <h2>Outs</h2>
     <div>{props.outs}</div>
     </>

)
}
export default Display 