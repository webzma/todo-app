import './index.css';
import { TodoProvider } from '../src/components/TodoContext';
import { AppUI } from './components/App/AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;