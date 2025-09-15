import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const name = "Pepeka grossa";

  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoT_-iuNaM-u9h8H6NxqCr9QXU9xAJ7JeJ8A&s"

  function soma(b, c){
    return b + c;
  }
  return ( //é necessario ter um elemento pai podendo ser uma div como visto abaixo
    <div className="App"> 
      <p>multiplicação: {2 * 7}</p>
      <p>soma: {soma(20, 56)}</p>
      <img src={url} alt='imagem safada'/>
      <HelloWorld />
      <Pessoa nome="Natan" idade="20" profissao="Macumbeiro" foto="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg" />
    </div>
  );
}

export default App;
