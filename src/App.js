import "./App.css";
import InstructorTag from "./components/InstructorTag";
import { AppWrapper } from "./components/styles";

const App = () => {
  return (
    <div>
      <AppWrapper>
        <h2>When in doubt, ask for help!</h2>
        <div>
          <InstructorTag />
        </div>
      </AppWrapper>
    </div>
  );
};

export default App;
