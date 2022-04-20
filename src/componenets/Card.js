import React from 'react'
import '../App.css'
import './Cards.css'


const Card = ({item}) => {
 
  // const dateToTime = date => date.toLocaleString('en-US', {
  //   hour: 'numeric',
  //   minute: 'numeric'
  // });
  
  // const dateString = "2/10/2019 12:00:00 AM";
  // const userOffset = new Date().getTimezoneOffset()*60*1000;
  // const localDate = new Date(dateString);
  // const utcDate = new Date(localDate.getTime() + userOffset);
  

  
  return (
    <div className='card'>
    <div className='card-inner'>
     <div className='card-front'>
       <img src={require(`../player-images/${item.Id}.jpg`)} alt='pics' />
       </div>
     <div className='card-back'>
       <h1>{item.PFName}</h1>
       <ul>
         <li>
           <strong>Player Id :</strong> {item.Id}
         </li>
         <li>
           <strong>Team Name:</strong>  {item.TName}
         </li>
         <li>
           <strong>SkillDesc:</strong> {item.SkillDesc}
         </li>
         <li>
           <strong>Upcoming Matches:</strong>  {item.VsCCode}  vs {item.CCode}
         </li>
         <li>
           <strong>Player Value: $</strong>{item.Value}
         </li>
         <li>
           <strong>Date: </strong>{item.UpComingMatchesList.map((e)=>{
             return (<span>{e.MDate}</span> )
           })}
         </li>
       </ul>
     </div>
   </div>
 </div>
  )
  
  
}

export default Card