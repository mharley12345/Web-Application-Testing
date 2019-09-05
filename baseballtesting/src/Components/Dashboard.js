import React,{useState} from 'react'
import Display from './Display'
const Dashboard = props => {
    const[balls ,setBalls] =useState(0)
  const[strikes, setStrikes] =useState(0)
  const[outs,setOuts] =useState(0)
 console.log(balls,strikes,outs)
return (
    <>
     <Display balls={balls} strikes={strikes}  />
    <div className='dashboard'>
       
        <button name='balls'  onClick={ ()=>setBalls(balls +1) } placeholder='Balls'>Balls</button>
        <button name='strikes'  onClick={ ()=>setStrikes(strikes +1) } placeholder="Strikes">Strikes</button>
        <button name='hit'  onClick={ ()=>setOuts(outs + 1) } placeholder='Outs'>Hit</button>
    

    </div>
    </>
)

}
export default Dashboard