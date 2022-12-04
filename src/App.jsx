import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Todo from './component/Todo';
import PlaceContentCenter from './component/PlaceContent';

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className='h-screen '>
        <PlaceContentCenter>
          <Todo />
        </PlaceContentCenter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
