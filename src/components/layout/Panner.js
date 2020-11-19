import React, { useRef, useState, useEffect } from 'react';
import { Carousel, Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const Panner = (props) => {
  const [size, setSize] = useState(window.innerWidth >= 750);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if ((window.innerWidth >= 750) !== size) {
        setSize(!size);
      }
    });
    return () => {
      window.removeEventListener('resize', () => {
        if ((window.innerWidth >= 750) !== size) {
          setSize(!size);
        }
      });
    };
  });

  const refCarousel = useRef(null);
  const onNext = () => {
    refCarousel.current.next();
  };
  const onPrevious = () => {
    refCarousel.current.prev();
  };
  return (
    <div style={{ width: '100%', margin: 'auto', position: 'relative' }}>
      <Carousel dots={false} ref={refCarousel}>
        {props.children.length ? (
          props.children.map((c, index) => {
            return (
              <div key={index}>
                <div style={{ textAlign: 'center' }}>{c}</div>
              </div>
            );
          })
        ) : (
          <div>
            <div style={{ textAlign: 'center' }}>{props.children}</div>
          </div>
        )}
      </Carousel>
        <>
          <Button
            danger
            type="primary"
            shape="circle"
            icon={<LeftOutlined />}
            style={{ position: 'absolute', top: '0', bottom: '0', marginTop: 'auto', marginBottom: 'auto', left: '5%' }}
            onClick={onPrevious}
          />
          <Button
            danger
            type="primary"
            shape="circle"
            icon={<RightOutlined />}
            style={{ position: 'absolute', top: '0', bottom: '0', marginTop: 'auto', marginBottom: 'auto', right: '5%' }}
            onClick={onNext}
          />
        </>
    </div>
  );
};

export default Panner;
