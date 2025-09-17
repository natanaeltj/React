import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoT_-iuNaM-u9h8H6NxqCr9QXU9xAJ7JeJ8A&s"

  function soma(b, c){
    return b + c;
  }
  return ( //é necessario ter um elemento pai podendo ser uma div como visto abaixo
    <div className="App"> 
    <Form/>

    </div>
  );
}

export default App;
