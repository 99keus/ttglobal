import React, { useRef } from 'react';
import { Carousel, Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const Panner = (props) => {
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
          props.children.map((c) => {
            return (
              <div>
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
      <Button
        danger
        type="primary"
        shape="circle"
        icon={<LeftOutlined />}
        style={{ position: 'absolute', top: '50%', left: '5%' }}
        onClick={onPrevious}
      />
      <Button
        danger
        type="primary"
        shape="circle"
        icon={<RightOutlined />}
        style={{ position: 'absolute', top: '50%', right: '5%' }}
        onClick={onNext}
      />
    </div>
  );
};

export default Panner;
