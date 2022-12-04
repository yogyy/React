import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import PlaceContentCenter from './component/PlaceContent';
import Card from './component/Card';
import { useState, useRef } from 'react';
import Button from './component/Button';
import Input from './component/Input';
import Todo from './component/Todo';

function App() {
  const inpuRef = useRef(null);
  // const tick = useRef(0);
  // const [tick, setTick] = useState(0);

  function handleClick() {}

  return (
    <div className=''>
      <Navbar />
      <PlaceContentCenter>
        <Card>
          <Card.Title>useRef Hooks</Card.Title>
          <Card.Body>
            <Input
              placeholder='Email'
              isFocused
              type='text'
              className='border border-slate-600'
            />
            <Input
              placeholder='Password'
              type='text'
              className='border border-slate-600'
            />
          </Card.Body>

          <Card.Footer>
            <Button onClick={handleClick}>bang?</Button>
          </Card.Footer>
        </Card>
        <Todo />
      </PlaceContentCenter>
      <Footer />
    </div>
  );
}

export default App;
