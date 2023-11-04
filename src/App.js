
import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  
  const [Linea1, setLinea1] = useState('');
  const [Linea2, setLinea2] = useState('');
  const [Imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento){
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function (evento){
    setLinea2(evento.target.value)
  }

  const onChanImagen = function (evento){
    setImagen(evento.target.value)
  }

  const onClickExportar = function (evento){
    alert ("exportar")
    html2canvas(document.querySelector("#meme")).then(canvas => {
        var img    = canvas.toDataURL("image/png");
         var link = document.createElement('a');
          link.download = 'meme.png';
          link.href = img;
          link.click();
        
  });
  }


  return (
    <div className='App'>
  <select onChange={onChanImagen}>
    <option value="blanco">BlANCO</option>
    <option value="drake">Drake</option>
    <option value="homeroTriste">homeroTriste</option>
    <option value="homero_elegante">homero_elegante</option>
    <option value="homero_santo_diablo">homero_santo_diablo</option>
    <option value="homero_trabajo">homero_trabajo</option>
    <option value="oso">oso</option>
  </select> <br />

    <input onChange={onChangeLinea1} type='text' placeholder='Linea1' /> <br />
    <input onChange={onChangeLinea2} type='text' placeholder='Linea2' /> <br />
    <button onClick={onClickExportar}> Exportar </button> <br />
    
    <div className='meme' id='meme'>
      <span>{Linea1}</span> <br />
      <span>{Linea2}</span>
      <img src={'/img/' + Imagen +'.jpg'}/>
    </div>

    

  </div>

  

  );
}

export default App;
