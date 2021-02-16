import "./App.css";
import MultiStepForm from "./components/MultiStepForm";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Route path="/" component={MultiStepForm} />
    </div>
  );
}

export default App;
