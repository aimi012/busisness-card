import logo from './logo.svg';
import './App.css';
import About from './about';
import Interest from './interest';
import Footer from './footer';
import Info from './info';

function App() {
  return (
    <div className="App">
      <img src="https://images.unsplash.com/photo-1676774690072-fd43a1fd8b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
      <Info/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
  );
}

export default App;
