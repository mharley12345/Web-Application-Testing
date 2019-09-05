import React from 'react'

const Display = props =>{


return (
<>
     <div className="strikes">
      <h2>Strikes:{props.strikes}</h2>
      </div>
      <div className="balls">
      <h2>Balls:{props.balls}</h2>
     </div>
     </>

)
}
export default Display 