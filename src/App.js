import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button as="a" variant="primary">
        Button as link
      </Button>
    </div>
  );
}

export default App;
