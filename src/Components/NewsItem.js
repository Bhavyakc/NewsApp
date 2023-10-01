import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, urlToImage, newsurl, author, date } = this.props;
    return (
      <div className="card">
        
        <img src={urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              by <b>{author ? author : "Unknown"}</b> on {date.slice(0, 10)}
            </small>
          </p>
          <a href={newsurl} target="_blank" className="btn btn-dark">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
