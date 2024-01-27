import { useState } from 'react'
import dataBase from './assets/dataBase'
import './App.css'

function App() {
  const [docSum, setDocSum] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [coefficient, setCoefficient] = useState(30)
  let result = [];


  function Final (docSum, quantity, dataBase) {

    let medium = docSum / quantity;
    let max = medium * (1 + Number(coefficient));
    let min = medium * (1 - Number(coefficient));
    

    for (let i = 0; i < quantity; i++) {

      let randomID = Math.round(Math.random() * (dataBase.length - 0) + 0);
      let randomSum = Math.round((Math.random() * (max - min) + min));
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
    setDocSum(0)
    setQuantity(0)
  }

  return (
    <>
      <h1>Randomizer 2.0</h1>
      <div className="card">
          <input type="number" placeholder='Сумма'onChange={(e)=> setDocSum(e.target.value)}/>
          <input type="number" placeholder='Коэфициент' onChange={(e)=> setQuantity(e.target.value)}/>
          <div>
            <input type="range" id="range" name="range" min="0.1" max="0.9" step="0.1" defaultValue="0.3" onChange={(e)=> setCoefficient(e.target.value)}></input>
            <div>{coefficient}</div>
            <label for="range">range</label>
          </div>

          <button onClick={Reset}>Сбросить</button>
      </div>

      <div>
        {result?.map((item) => (
          <>
            <div key={item.id}>
              <p>Название: {item.title}</p>
              <p>Название в базе: {item.baseTitle}</p>
              <p>Цена: {item.price}</p>
              <p>Количество: {item.quantity}</p>
              <p>Сумма: {item.sum}</p>
              <hr />
            </div>
            </>
          ))
        }
      </div>
    </>
  )
}

export default App;
