import React,{useState} from 'react'
import Display from './Display'
const Dashboard = props => {
 const[balls ,setBalls] =useState(0)
  const[strikes, setStrikes] =useState(0)
  const[outs,setOuts] =useState(0)
 console.log(balls,strikes,outs)
 const resetBalls = () => setBalls(0)
 const resetStrikes = () => setStrikes(0)
const handleFoul = () => {
    if (strikes != 2)return setStrikes(strikes +1)
    else return strikes
}
 const handleBallClick = () =>{
    if (balls != 3 ) return setBalls(balls + 1)
    else return setBalls(0)
 } 
     
 const handleStrikeClick = () =>{
     if (strikes != 2) return setStrikes(strikes +1)
     else if(strikes  == 2 && outs !=2) return setStrikes(0),setOuts(outs +1)
     else return setStrikes(0), setOuts(0)
 }
 const handleHit =()=> { return resetBalls(), resetStrikes()}
return (
    <>
     <Display balls={balls} strikes={strikes} outs={outs} />
    <div className='dashboard'>
    <button name ='foul' className="fouls" data-testid='foul-button' onClick={ ()=> handleFoul()} placeholder='Foul'>Foul</button>
    <button name='hit' className="hits"data-testid='hit-button' onClick={ ()=> handleHit() } placeholder='Outs'>Hit</button>
      <br/>
      <button name='balls' className='balls-btn' data-testid='balls-button'  onClick={ ()=> handleBallClick() } placeholder='Balls'>Balls</button>
     <br/> 
    
      <br/>

      <button name='strikes' className="strikes-btn" data-testid='strikes-button' onClick={ () => handleStrikeClick() } placeholder="Strikes">Strikes</button>

    </div>
    </>
)

}
export default Dashboard