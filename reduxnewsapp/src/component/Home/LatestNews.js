import React from "react";
import { Link } from "react-router-dom";

const LatestNews = (props) => {

  const latestRender = ({ latestdata }) => {
    if (latestdata) {
      return latestdata.map((data) => {
        return (
          <Link to={`/details/${data.id}`} className="item">
            <div className="item image_cover" style={{ background: `url('/images/articles/${data.img}')` }}>
              <div className="description">
                <span>{data.category}</span>
                <div>{data.title}</div>
              </div>
            </div>
          </Link>
        )
      })
    }
  }

  return (
    <div className="home-latest">
      {latestRender(props)}
    </div>
  )
}

export default LatestNews