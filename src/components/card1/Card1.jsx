import style from './Card1.module.css'


const Card1 =()=>{
    const imagen= 'https://i.pinimg.com/564x/4e/25/80/4e2580d67ef0011b97d62c64749986d0.jpg'
    return(
      <div className={style.card}>
        <div className={style.imageBox}>
             <img src={imagen} alt="imagen" />
        </div>
        <div className={style.content}>
            <h2>pepe argento</h2>
            <p>descripcion...</p>
        </div>

      </div>
    )
}


export default Card1