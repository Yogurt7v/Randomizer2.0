import style from './component.module.css'
import React from 'react'

// eslint-disable-next-line react/prop-types
export const Component = ({result})=>{

    function Copy (text) {
        navigator.clipboard.writeText(text);
      }
    
    return (
        <div className={style.component}>
        {result?.map((item) => (
          <>
            <div key={item.id} className={style.sinlgeCard}>
              <div className={style.cardItem}>
                <div><strong>Название:</strong> {item.title}</div>
                <button className={style.copy} onClick={() => Copy(item.title)}>c</button>
              </div>
              <div className={style.cardItem}>
              <div><strong>Название в базе:</strong> {item.baseTitle}</div>
              <button className={style.copy} onClick={() => Copy(item.baseTitle)}>c</button>
                </div>
                <div className={style.cardItem}>
                <div><strong>Цена:</strong> {item.price}</div>
                <button className={style.copy}  onClick={() => Copy(item.price)}>c</button>
              </div>
              <div className={style.cardItem}>
                <div><strong>Количество:</strong>  {item.quantity}</div>
                <button className={style.copy}  onClick={() => Copy(item.quantity)}>c</button>
              </div>
              <div className={style.cardItem}>
                <div><strong>Сумма:</strong>{new Intl.NumberFormat("ru-RU").format(item.sum)}</div>
                <button className={style.copy}  onClick={() => Copy(item.sum)}>c</button>
              </div>
            </div>
            </>
          ))
        }
      </div>
    )
}

export default Component