import { Soma } from "./components/Soma";
import { UserGreeting } from "./components/UserGreeting";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
      <UserGreeting props={{ firstName: "Guilherme", lastName: "França" }} />
      <Soma a={3} b={2}/>
    </div>
  );
}

export default App;




