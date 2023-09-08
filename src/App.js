import "./App.css";

import TodoHeader from "./components/todoHeader";
import FormTodo from "./components/formTodo";
import ListTodo from "./components/listTodo";

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <FormTodo />
      <ListTodo />
    </div>
  );
}

export default App;
