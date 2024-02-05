function CardItem({ imgUrl, svg, country, link, place, published, text }) {
    return (
        <div className="card">
          <div className="img-wrap">
          <img src={imgUrl} width={125} height={168} alt="" />
          </div>
          <div className="txt-wrap">
          <div className="upper-string">
          <svg className='pointer' width="7" height="10">
            <use href={svg}></use>
          </svg>
          <p className='country'>{country}</p>
          <a className='maps-link' href={link}>View on Google Maps</a>
          </div>
          <h2>{place}</h2>
          <b className="data">{published}</b>
          <p className='text'>{text}</p>
          </div>
        </div>
    )
}

export default CardItem