import { useState } from 'react'
import './App.css'

//Static array of pizza options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

function App() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTopping = ({currentTarget}: React.MouseEvent<HTMLButtonElement>) => {
    const clickedTopping = currentTarget.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };

return (
   <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? 'Remove ' : 'Add '}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(', ')} pizza</p>
 </div>
);

}

export default App
