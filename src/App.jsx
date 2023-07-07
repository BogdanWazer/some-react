import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const variable = 'Alex';

  const fruites = ['banana', 'apple', 'orange'];

  const fruites2 = fruites.map(function (item, index) {
    console.log(`Fruit ${index}: ${item}`);
  });

  const user = {
    name: 'Bogdan',
    lastName: 'Kichak',
    age: 20,
  };

  const { name: firstName2, lastName, age, city = 'Kyiv' } = user;

  const object = {
    name: [variable],
    fruit: [fruites[0]],
  };

  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="#">
          Hello, {firstName2}. My city is {city}{' '}
        </a>
        {/* <div>Fruit: {object.fruit}</div> */}
      </div>

      {/* {fruites.map(function (fruit, index) {
        return (
          <div>
            Fruit {index}: {fruit}
          </div>
        );
      })} */}
    </>
  );
}
export default App;
