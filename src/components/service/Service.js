import React, { useState } from 'react';
import service from './service.json';
import { Image } from 'antd';
import { DownloadOutlined, SendOutlined } from '@ant-design/icons';

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
                    style={{ width: '300px', height: '60px' }}
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

      <div style={{ width: '100%', marginTop: '50px' }}>
        <div
          style={{
            width: '65%',
            margin: 'auto',
            border: '2px solid #da3849',
            padding: '30px 50px',
            borderRadius: '10px',
            display: 'flex',
          }}
        >
          <div style={{ flexGrow: '1' }}>
            <div style={{ fontSize: '30px' }}>
              Download our <strong>Catalog & profile</strong>
            </div>
            <button
              className="custom-button active"
              style={{ marginTop: '20px', width: '300px', height: '60px' }}
            >
              Download now <DownloadOutlined />
            </button>
          </div>
          <div style={{ flexGrow: '1' }}>
            <Image src="/logo-1.jpg" width={200} />
          </div>
        </div>
      </div>
      <div
        style={{
          width: '70%',
          margin: 'auto',
          fontSize: '30px',
          color: '#da3849',
          fontWeight: 'bold',
          marginTop: '20px',
        }}
      >
        Get our newsletter for T&T Global
      </div>
      <div
        style={{
          width: '70%',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
      >
        <input
          type="text"
          placeholder="Name"
          style={{
            width: '300px',
            height: '40px',
            padding: '10px 20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            background: '#ccc',
          }}
        />
        <input
          type="text"
          placeholder="Email"
          style={{
            width: '300px',
            height: '40px',
            padding: '10px 20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            background: '#ccc',
          }}
        />
        <button className="custom-button active" style={{ width: '170px', height: '60px' }}>
          Send Now
        </button>
      </div>
    </div>
  );
};

export default Service;
