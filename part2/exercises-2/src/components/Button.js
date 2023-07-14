import './styles.css';
import oceans from './oceans.json'

function Button(props) {
   const onLearnMore = () => {
      alert("Not all ocean life is a fish")
   }
   const notFish = () => {
      alert("I DONT KNOW")
   }

   return (
      <div>
         {oceans.map((props) => {
            return (
               <button onClick={props.fishCheck ? {onLearnMore} : {notFish}}>
                  Learn More
               </button>)
         })}
      </div>
   );
}

export default Button; 