import './App.css';
import {useState, useEffect} from 'react';

function Counter() {
  const [count, setCount] =useState(0);

  useEffect(() => {
    document.title = `${count} times clicked`
  }, [count]);

  return (
      <div>
          <button onClick={() => setCount(count+1)}>
              Change Counter {count} times clicked
          </button>
      </div>
  );
}

const UserCard = (props) => {
  return (
    <div>
      <h1>My Identity</h1>
      <ul>
        <li>Nama : {props.nama}</li>
        <li>NPM : {props.npm}</li>
        <li>
          My Github :
          <a href="https://github.com/Stephen1303/kuis_programming_wendy">{props.github}</a>
        </li>
      </ul>
    </div>
  );
}

function Form(){
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      alert(`Hallo, ${name}`);
    } else {
      alert('Harap Masukkan nama!');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Anda"/>
      <button type="submit">Tampilkan</button>
    </form>
  );
}

function UbahBg(){
  const [bgColor, setBg] = useState("#FFFFFF");

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }
  const handleChangeColor = () => {
    setBg(generateRandomColor());
  }

  document.body.style.backgroundColor = bgColor;

  return (
    <button onClick={handleChangeColor}>
      Change Background Color
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <div >
        <Counter />
        <UserCard nama="Wendy Steven" npm="2428240056P" github="My_Github"/>
        <Form />
        <UbahBg />
      </div>
    </div>
  );
}

export default App;
