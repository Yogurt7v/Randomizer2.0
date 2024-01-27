import { useState } from 'react'
import dataBase from './assets/dataBase'
import './App.css'

function App() {
  const [docSum, setDocSum] = useState(0)
  const [quantity, setQuantity] = useState(0)

  let result = [];


  function Final (docSum, quantity, dataBase) {
    let max = Number(docSum);
    console.log("Сумма: ", max);
    let min = max / quantity;  // подпавить минимум 
    let sum = 0;

    do {
      let randomID = Math.round(Math.random() * (dataBase.length - 0) + 0);
      let randomSum = Math.round((Math.random() * (max - min) + min));
      let randomQuantity = Math.round((randomSum / dataBase[randomID].price));
      sum = sum + randomSum;

      result.push({
        id: dataBase[randomID].id,
        title: dataBase[randomID].title,
        baseTitle: dataBase[randomID].baseTitle,
        price: dataBase[randomID].price,
        quantity: randomQuantity,
        sum: randomQuantity * dataBase[randomID].price

      });
      console.log("Результат: ", result);
      console.log("Сумма: ", sum);
    } while (sum <= docSum);
    
    if (sum> docSum) {

      result[result.length-1] = {
        ...result[result.length - 1],
        sum: docSum - result[result.length - 2].sum,
        quantity: (Math.round(((docSum - result[result.length - 2].sum) /  result[result.length - 1].price) *1000))/1000
      }
    }
    }

  Final(docSum, quantity, dataBase);

  // настроить выдачу результатов

  return (
    <>
      <h1>Randomizer 2.0</h1>
      <div className="card">
          <input type="number" placeholder='Сумма' onChange={(e)=> setDocSum(e.target.value)}/>
          <input type="number" placeholder='Коэфициент' onChange={(e)=> setQuantity(e.target.value)}/>
      </div>

      <div>
        {dataBase.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
