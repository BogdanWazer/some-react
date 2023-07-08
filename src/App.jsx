import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const User = ({ firstName2 }) =>
  (firstName2 && <h1>{firstName2}</h1>) || <p>No Data!</p>;

const multiple = function sum(a, b) {
  console.log(a + b);
};

multiple(5, 10);

const multiple2 = (a, b) => {
  return a + b + 5;
};
console.log(multiple2(5, 7));

function App() {
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
    gender: 'Man',
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
