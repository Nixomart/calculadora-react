import './App.css';
import Boton from './components/boton';
import Window from './components/window';
import ButtonClear from './components/buttonClear';
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {
  const [window, setWindow] = useState('')

  const addWindow = (val) => {
    setWindow(window + val);
  };

  const calculate = () => {
    if (window) {
      setWindow(evaluate(window));
    } else {
      alert('Ingresa valores')
    }

  };

  return (
    <div className="App">
      <div className='titulo'>
        <h1 >Calculadora en React</h1>
      </div>
      <div className='contenedor-calculadora'>
        <Window input={window} />
        <div className='fila'>
          <Boton manipuleClick={addWindow}>1</Boton>
          <Boton manipuleClick={addWindow}>2</Boton>
          <Boton manipuleClick={addWindow}>3</Boton>
          <Boton manipuleClick={addWindow}>+</Boton>

        </div>
        <div className='fila'>
          <Boton manipuleClick={addWindow}>4</Boton>
          <Boton manipuleClick={addWindow}>5</Boton>
          <Boton manipuleClick={addWindow}>6</Boton>
          <Boton manipuleClick={addWindow}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manipuleClick={addWindow}>7</Boton>
          <Boton manipuleClick={addWindow}>8</Boton>
          <Boton manipuleClick={addWindow}>9</Boton>
          <Boton manipuleClick={addWindow}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manipuleClick={calculate} > = </Boton>
          <Boton manipuleClick={addWindow} >0</Boton>
          <Boton manipuleClick={addWindow} >.</Boton>
          <Boton manipuleClick={addWindow} >/</Boton>
        </div>
        <div className='fila'>
          <ButtonClear clear={() => setWindow('')}>Limpiar</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
