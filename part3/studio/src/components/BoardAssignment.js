import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Breakfast side", value: "Breakfast side"},
      {label: "Sandwich bread", value: "Sandwich bread"},
      {label: "Bread for soup", value: "Bread for soup"}];

      const [boardName, setBoardName] = useState('no boards yet!')

   const handleChange = (event) => {
      setBoardName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange} style={{backgroundColor: "lightpink"}}>
         {boards.map((board)=> (
            <option value={board.value}>{board.label}</option>))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}