import './styles.css';
import Button from './Button';
import oceans from './oceans.json';
//import FishButton from './FishButton';

// function FishOrNotFish (props){
//    const fishCheck = props.fishCheck;
//    return fishCheck ? <Button/> : <FishButton />
// }

function Profile() {

   const listItem = oceans.map(ocean =>
      <div key={ocean.id} className={`${ocean.fishCheck === 'true' ? 'isAFish' : 'profile'}`}>
         <img src={ocean.image} alt={ocean.name} className='img' />
         <h1>{ocean.name}</h1>
         <h2>Some Fun Facts</h2>
         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         </ul>
         <div>
            <Button/>
         </div>
      </div>)
   return (
      <ul>
         {listItem}
      </ul>
   );
}

export default Profile; 