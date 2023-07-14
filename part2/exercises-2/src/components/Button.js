import './styles.css';
//import oceans from './oceans.json'

function Button(props) {
   const onLearnMore =()=>{
      alert("Not all ocean life is a fish")
   }

   return (
      <button onClick={onLearnMore}>
         Learn More
      </button>
   );
}

// let fishCheck = oceans.map(ocean => ocean.fishCheck)
// let id = oceans.map(ocean => ocean.id)
//=== 'true' ? alert('boo'): alert('hey'))
//alert(fishCheck[0])
// for (let i = 0; i < fishCheck.length; i++){
// if(id[i] === i+1) {
//    alert(fishCheck[i])
// }}
//let fishCheck = oceans.fishCheck === 'true' ? alert('boo') : alert('hey')
//const fishCheck = true;
// const isFish = "Splish Splash, I am a fish"
//const notFish = "I like water, but I am not a fish"
//fishCheck ? alert("Splish Splash, I am a fish") : alert("I like water, but I am not a fish")
// for (let i = 0; i < fishCheck.length; i++) {
//    fishCheck[i] === "true" ? alert("Splish Splash, I am a fish") : alert("I like water, but I am not a fish")
// }

export default Button; 