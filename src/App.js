import { useState } from "react";
import Content from "./Content";
import ColorPicker from "./ColorPicker";
import './App.css'

function App() {
  /*
    create a use state hook for a controlled react input
    so for every change in the input a change in the re-rendered
    component occurs.
  */
 const [color, setColor] = useState('');

/*
  now send this color as a prop to the content alias
  for the content functional component to make use of it
  in it's functional component.
*/
  return (
    <main>
      <h1>A simple Color Picker</h1>
      <Content color={color} />
      <ColorPicker color={color} setColor={setColor} />
    </main>
  );
}

export default App;
