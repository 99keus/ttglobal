import React, { useState } from 'react';
import service from './service.json';
import { Image } from 'antd';
import { DownloadOutlined, SendOutlined } from '@ant-design/icons';
import CatalogDownload from '../layout/CatalogDownload';
import NewsLetter from '../layout/NewsLetter';

const Service = () => {
  const [articles, setArticle] = useState(service);

  const handleOpenClick = (id) => {
    setArticle(
      articles.map((a) => {
        if (a.id === id) {
          a.state = !a.state;
        }
        return a;
      })
    );
  };
  return (
    <div>
      {articles.map((a, i) => {
        const { id, title, state, src, content } = a;
        return (
          <div key={i}>
            <div className="custom-background" style={{ backgroundImage: `url(${src})` }}>
              <div className="custom-meta">
                <div className="custom-title">{title}</div>
                <div className="custom-button-container">
                  <button
                    className={`custom-button ${state === true ? `active` : null}`}
                    onClick={() => handleOpenClick(id)}
                  >
                    {state === true ? 'Hide' : 'Read more'} &gt;
                  </button>
                </div>
              </div>
            </div>
            {state === true ? <div className="custom-content">{content}</div> : null}
          </div>
        );
      })}

      <CatalogDownload/>
      <NewsLetter/>
    </div>
  );
};

export default Service;
