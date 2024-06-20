import './App.css';
import Counter from './components/counter/Counter';

// We need {} for precise component. If no braces, default export.
function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

// function PlayingWithProps(properties) {
//   console.log(properties)
//   return (
//     <div>Props</div>
//   )
// }

// function PlayingWithProps({property1, property2}) {
//   console.log(property1)
//   console.log(property2)
//   return (
//     <div>Props</div>
//   )
// }

export default App;
