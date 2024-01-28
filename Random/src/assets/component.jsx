import style from './component.module.css'
import React from 'react'

// eslint-disable-next-line react/prop-types
export const Component = ({result})=>{

    function Copy (text) {
        navigator.clipboard.writeText(text);
      }
    
    return (
        <div>
        {result?.map((item) => (
          <>
            <div key={item.id}>
              <div className={style.cardItem}>
                <p>Название: {item.title}</p> 
                <button className='copy' onClick={() => Copy(item.title)}><i class="gg-copy"></i></button>
              </div>
              <div className={style.cardItem}>
              <p>Название в базе: {item.baseTitle}</p> 
              <button className='copy' onClick={() => Copy(item.baseTitle)}><i class="gg-copy"></i></button>
                </div>
                <div className={style.cardItem}>
                <p>Цена: {item.price}</p> 
                <button className='copy' onClick={() => Copy(item.price)}><i class="gg-copy"></i></button>
              </div>
              <div className={style.cardItem}>
                <p>Количество: {item.quantity}</p> 
                <button className='copy' onClick={() => Copy(item.quantity)}><i class="gg-copy"></i></button>
              </div>
              <div className={style.cardItem}>
                <p>Сумма: {new Intl.NumberFormat("ru-RU").format(item.sum)}</p> 
                <button className='copy' onClick={() => Copy(item.sum)}><i class="gg-copy"></i></button>
              </div>
              <hr />
            </div>
            </>
          ))
        }
      </div>
    )
}

export default Component