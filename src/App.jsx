import React from 'react';
 
function App() {
  return (
    <p>
      Cleanedup React App
    </p>
  );
}
 
export default App;

/* to keep in mind when adding in nav
const App = () => {
  const [count, setCount] = React.useState(0);
  
  const components = [
      <div>1</div>,
      <div>2</div>,
      <div>3</div>,
      <div>4</div>
  ]

  return <div>
      {
          // render component from our components array
          components[count]
      }

      // show previous button if we are not on first element 
      {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}

      // hide next button if we are at the last element
      {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>}
  </div>
}
*/


