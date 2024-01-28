import style from './component.module.css'
import copyImg  from './copy.jpg'
import test from "./copy-svgrepo-com.svg";

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
                <button className={style.copy} onClick={() => Copy(item.title)}><img className={style.svg} src={test} alt="Copy" /></button>
              </div>
              <div className={style.cardItem}>
              <div><strong>Название в базе:</strong> {item.baseTitle}</div>
              <button className={style.copy} onClick={() => Copy(item.baseTitle)}><img className={style.svg} src={test} alt="Copy" /></button>
                </div>
                <div className={style.cardItem}>
                <div><strong>Цена:</strong> {item.price}</div>
                <button className={style.copy}  onClick={() => Copy(item.price)}><img className={style.svg} src={test} alt="Copy" /></button>
              </div>
              <div className={style.cardItem}>
                <div><strong>Количество:</strong>  {item.quantity}</div>
                <button className={style.copy}  onClick={() => Copy(item.quantity)}><img className={style.svg} src={test} alt="Copy" /></button>
              </div>
              <div className={style.cardItem}>
                <div><strong>Сумма:</strong>  {new Intl.NumberFormat("ru-RU").format(item.sum)}</div>
                <button className={style.copy}  onClick={() => Copy(item.sum)}><img className={style.svg} src={test} alt="Copy" /></button>
              </div>
            </div>
            </>
          ))
        }
      </div>
    )
}

export default Component