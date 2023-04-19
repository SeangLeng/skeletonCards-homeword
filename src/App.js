import './App.css';
import { RenderingCards } from './components/RenderingCards';

function App() {
  return (
    <>
      <div class="container">
        <h1>Products collection</h1>
        <div class="row">
          <RenderingCards/>  
        </div>
      </div>
    </>
  );
}

export default App;
