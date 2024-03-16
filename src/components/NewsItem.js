import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newUrl, author, date } = props
  return (
    <div className="card p-2">
      <img className="card-img-top" src={imageUrl ? imageUrl : "https://www.quantumbalancing.com/images/News2.gif"} alt="..." style={{ height: "10rem" }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className='card-text'><small className='text-muted'>By {!author ? "Unknow" : author} or {new Date(date).toGMTString()}</small></p>
        <a href={newUrl} target="_blank" rel="noreferrer" className="btn btn-dark">ReadMore</a>
      </div>
    </div>
  )
}

export default NewsItem
