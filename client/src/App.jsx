import './App.css';
// import HomeScreen from './screens/HomeScreen';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen'>
      <Outlet />
    </div>
  );
  // <HomeScreen className='h-screen' />;
}

export default App;
