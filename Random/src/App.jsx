import Component from './assets/component'
import { useState } from 'react'
import dataBase from './assets/dataBase'
import './App.css'

function App() {
  const [docSum, setDocSum] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [coefficient, setCoefficient] = useState(0.3)


  let result = [];


  function Final (docSum, quantity, dataBase) {

    let medium = docSum / quantity;
    let max = medium * (1 + Number(coefficient));
    let min = medium * (1 - Number(coefficient));
    

    for (let i = 0; i < quantity; i++) {

      let randomID = Math.round(Math.random() * (dataBase.length - 0) + 0);
      let randomSum = Math.round((Math.random() * (max - min) + min)*100)/100;
      let randomQuantity = (Math.round((randomSum / dataBase[randomID]?.price)*100))/100;

      result.push({
        id: dataBase[randomID]?.id,
        title: dataBase[randomID]?.title,
        baseTitle: dataBase[randomID]?.baseTitle,
        price: dataBase[randomID]?.price,
        quantity: randomQuantity,
        sum: randomSum

      });
    }
    let reduce = result.reduce((acc, item) => acc + item.sum, 0);
    if (reduce > docSum) {

      result[result.length-1] = {
        ...result[result.length - 1],
        sum: result[result.length - 1].sum - (reduce - docSum),
        quantity: (Math.round(((result[result.length - 1].sum - (reduce - docSum)) /  result[result.length - 1].price) *1000))/1000
      }
    }
    if (reduce < docSum) {
      result[result.length-1] = {
        ...result[result.length - 1],
        sum: docSum-reduce + result[result.length - 1]?.sum,
        quantity: (Math.round(((docSum-reduce + result[result.length - 1]?.sum) /  result[result.length - 1]?.price) *1000))/1000
      }
    }
    return result
  }

  Final(docSum, quantity, dataBase)

  console.log("reduser", result.reduce((acc, item) => acc + item.sum, 0));

  function Reset () {
    document.getElementById("range").value = 0.3;
    document.getElementById("sum").value = "";
    document.getElementById("quantity").value = "";
    setDocSum(0)
    setQuantity(0)
    setCoefficient(0.3)
    result = []
  }


  return (
    <>
      <h1>Randomizer 2.0</h1>
      <div className="card">
        <div className="inputs">
          <input type="tel" autoComplete="off" placeholder='Сумма'onChange={(e)=> setDocSum(e.target.value)} id='sum'/>
          <input type="tel" autoComplete="off" placeholder='Кол-во' onChange={(e)=> setQuantity(e.target.value)} id='quantity'/>        </div>
          <div className='range'>
            <label>Разброс относительно средней цены</label>
            <div className='coefficient'>{coefficient*100} %</div>
            <input type="range" id="range" name="range" min="0.1" max="0.9" step="0.1" defaultValue="0.3" onChange={(e)=> setCoefficient(e.target.value)}></input>
          </div>
          <button className="resetBtn" onClick={Reset}>Сбросить</button>
      </div>
      <Component result={result} />
    </>
  )
}

export default App;
