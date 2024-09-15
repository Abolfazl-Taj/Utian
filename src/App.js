import { useRoutes } from 'react-router-dom';
import './App.css';
import {default as Path} from './Assets/Routes';

function App() {
  const Routes = useRoutes(Path)
  return  Routes
}

export default App;
