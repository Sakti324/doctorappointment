import './App.css';
import Home from "../src/components/Home/Home.js";

function App() {
  return (
    <div className="App">
      <header>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css" rel="stylesheet" />
      </header>
      <body>
        <Home/>
      </body>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
    </div>
  );
}

export default App;
