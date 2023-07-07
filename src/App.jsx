import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function User({ name, lastName, ...rest }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{lastName}</h2>
      <p>{JSON.stringify(rest)}</p>
    </div>
  );
}
function App() {
  const variable = 'Alex';

  const fruites = ['banana', 'apple', 'orange'];

  const [banana, ...restFruits] = fruites;

  console.log(fruites);

  const fruites2 = fruites.map(function (item, index) {
    console.log(`Fruit ${index}: ${item}`);
  });

  const user = {
    name: 'Bogdan',
    lastName: 'Kichak',
    age: 20,
    bestFriend: {
      name: 'Brian',
      channel: 'BrianChannel',
    },
  };

  const user2 = {
    ...user,
  };
  user2.name = 'Vlad';

  console.log(`User1:`, user);
  console.log(`User2:`, user2);
  const {
    name: firstName2,
    lastName,
    age,
    city = 'Kyiv',
    bestFriend: { name: friendName },
  } = user;

  const object = {
    name: [variable],
    fruit: [fruites[0]],
  };

  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <User {...user} />
      </div>
      <div>
        <a href="#">
          Hello, {firstName2}. My city is {city}{' '}
        </a>
        <p>This is: {friendName}</p>
        {/* <div>Fruit: {object.fruit}</div> */}
      </div>

      {/* {fruites.map(function (fruit, index) {
        return (
          <div>
            Fruit {index}: {fruit}
          </div>
        );
      })} */}

      <div>{restFruits[0]}</div>

      <div>first fruit: {restFruits}</div>
    </>
  );
}
export default App;
