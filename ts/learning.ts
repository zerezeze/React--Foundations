////////////// props
interface GreetingProps {
    name: string;
  }
  
  function Greeting({ name }: GreetingProps) {
    return <h1>Hello, {name}!</h1>;
  }
  
  function App() {
    return <Greeting name="José" />;
  }
  
  /////////////// useState
  import { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState<number>(0); // Tipagem para estado numérico
  
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
      </div>
    );
  }
  
  /////// useEffect
  import { useState, useEffect } from 'react';
  
  function DataFetcher() {
    const [data, setData] = useState<any>(null); // Tipagem para dados que podem ser de qualquer tipo
  
    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(result => setData(result));
    }, []);
  
    return <div>Dados: {data ? JSON.stringify(data) : 'Carregando...'}</div>;
  }
  
  ////// axios
  import { useState, useEffect } from 'react';
  import axios from 'axios';
  
  function DataFetcher() {
    const [data, setData] = useState<any>(null); // Tipagem para dados que podem ser de qualquer tipo
  
    useEffect(() => {
      axios.get('https://api.example.com/data')
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, []);
  
    return <div>Dados: {data ? JSON.stringify(data) : 'Carregando...'}</div>;
  }
  
  //////// redux
  import { createStore } from 'redux';
  import { useSelector, useDispatch } from 'react-redux';
  
  const initialState = { count: 0 };
  
  type Action = { type: 'INCREMENT' };
  
  function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      default:
        return state;
    }
  }
  
  const store = createStore(counterReducer);
  
  // redux no componente
  function Counter() {
    const count = useSelector((state: { count: number }) => state.count);
    const dispatch = useDispatch();
  
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Aumentar</button>
      </div>
    );
  }
  