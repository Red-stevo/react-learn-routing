import './App.css';
import ThemeProvider from "react-bootstrap/ThemeProvider";
import PageFooter from "./Components/PageFooter";

function App() {
  return (
    <div className="App">
        <ThemeProvider
            breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
           <PageFooter></PageFooter>
        </ThemeProvider>
    </div>
  );
}

export default App;
