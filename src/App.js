import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todoapp container mt-3 text-light bg-dark">
      <h1 className=" p-2 rounded border-bottom">TODO app</h1>
      <TodoList />
    </div>
  );
}

export default App;
