import React, { useContext, useEffect, useState, useRef } from 'react';
import { Tabs, Image, Menu, Carousel, Row, Col, Modal } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { ProductContext } from '../ProductContext';
import {Button as AButton} from 'antd';
import { useParams } from 'react-router-dom';
import Button from '../layout/Button';
import List from '../layout/List';
import Panner from '../layout/Panner';
import OurPartner from '../layout/OurPartner';
import _ from 'lodash';

const { TabPane } = Tabs;
const { SubMenu, Item } = Menu;
const TITLES = [
  'WIDTH & LENGTH',
  'THICKNESS (SINGLE WALL)',
  'PHYSICAL PROPERTIES',
  'QUALITY ASSURANCE',
]

const ProductDetail = () => {
  const products = useContext(ProductContext);
  const refCarousel = useRef(null);
  const { id } = useParams();
  const [state, setState] = useState({
    tab: 'nitrile',
    size: window.innerWidth >=750,
    visible: false,
    carou: [],
  });
  const { title, description, thumbnail, image } = products.find((p) => p.id === id) || {};
  const { tab, size, visible, carou } = state;

  useEffect(() => {
    window.addEventListener('resize', () => {
      if ((window.innerWidth >= 750) !== size) {
        setState(state => ({...state, size: !size}));
      }
    });
    return () => {
      window.removeEventListener('resize', () => {
        if ((window.innerWidth >= 750) !== size) {
          setState(state => ({...state, size: !size}));
        }
      });
    };
  });

  const onNext = () => {
    refCarousel.current.next();
  };

  const onPrevious = () => {
    refCarousel.current.prev();
  };

  const openPopup = (arr, index) => {
    setState(state => ({...state, visible: true}));
    const images = [...arr.slice(index), ...arr.slice(0, index)];
    if (size) {
      setState(state => ({...state, carou: images}));
    } else {
      setState(state => ({...state, carou: tab === 'nitrile' ? [...image.nitrile] : [...image.latex]}));
    }
    document.addEventListener('keyup', function (event) {
      if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      }
    });
  };

  const closePopup = () => {
    setState(state => ({...state, visible: false, carou: []}));
    document.removeEventListener('keyup', function (event) {
      if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      }
    });
  };

  const chunk = (images) => {
    return _.chunk(images, size ? 4 : 1).map((g, index) => {
      return (
        <div key={index}>
          {g.map((i, index) => {
            return (
              <img
                onClick={() => openPopup(g, index)}
                key={index}
                src={i}
                width={320}
                height={240}
                alt={index}
                style={{ display: 'inline-block', margin: '12px' }}
              />
            );
          })}
        </div>
      );
    });
  };

  const handleOnChange = (e) => {
    if (e !== tab) {
      setState({...state, tab: e});
    }
  };


  return (
    <div>
      <Row>
        <Col xs={24} lg={12}>
          {thumbnail ? (
            <Image
              style={{ padding: '25px' }}
              height="100%"
              width="100%"
              src={thumbnail}
              className="image-thumbnail"
            />
          ) : (
            <div className="unavailable-image" style={{ height: '100%' }}>
              <div className="unavailable-image-blur">This product is temporarily unavailable</div>
            </div>
          )}
        </Col>
        <Col xs={24} lg={12}>
          <div className="product_description_container__detail">
            <div className="product_description_title__detail">
              <b>{title}</b>
            </div>
            <div className="product_description_content__detail">
              <p>{description}</p>
            </div>
            <div style={{ position: 'flex', bottom: '40px'}}>
              {image ? (
                <Button height={40} borderRadius={10} fontSize={'1rem'} fontWeight="bold">
                  Contact us
                </Button>
              ) : (
                <div className="unavailable-text">We will update this product soon</div>
              )}
            </div>
            <Modal
              visible={visible}
              onCancel={closePopup}
              footer={null}
              closable={false}
              centered={true}
              style={{width: '100%'}}
            >
              <Carousel dots={false} ref={refCarousel}>
                {carou.map((i, index) => {
                  return (
                    <img key={index} src={i} alt={index} style={{ display: 'inline-block' }} />
                  );
                })}
              </Carousel>
              <>
                <AButton
                  danger
                  type="primary"
                  shape="circle"
                  icon={<LeftOutlined />}
                  size={size ? 'large' : 'middle'}
                  style={{ position: 'absolute', top: '0', bottom: '0', marginTop: 'auto', marginBottom: 'auto', left: size ? '-10%' : '5%' }}
                  onClick={onPrevious}
                  />
                <AButton
                  danger
                  type="primary"
                  shape="circle"
                  icon={<RightOutlined />}
                  size={size ? 'large' : 'middle'}
                  style={{ position: 'absolute', top: '0', bottom: '0', marginTop: 'auto', marginBottom: 'auto', right: size ? '-10%' : '5%' }}
                  onClick={onNext}
                />
              </>
            </Modal>
          </div>
        </Col>
      </Row>
      {image ? (
        <div className={size ? 'container-tab-nav large' : 'container-tab-nav small'}>
          <Tabs defaultActiveKey="nitrile" className="mt-3" onChange={handleOnChange}>
            <TabPane tab="Nitrile" key="nitrile">
              <Panner>{chunk(image.nitrile)}</Panner>
            </TabPane>
            <TabPane tab="Latex" key="latex">
              <Panner>{chunk(image.latex)}</Panner>
            </TabPane>
          </Tabs>
          <div className="product_detail_header header_middle mt-3 mb-3">Product details</div>
          <Menu theme="light" style={{ width: '100%' }} mode="inline">
            {
              TITLES.map((v, i) => (
                <SubMenu key={`sub${i}`} title={v} className="custom-submenu">
                  <Item key={i} style={{ height: '100%', padding: '30px' }}>
                    <Image width="100%" src={tab === 'nitrile' ? image.nitrileDetail[i] : image.latexDetail[i]} />
                  </Item>
                </SubMenu>
              ))
            }
          </Menu>
        </div>
      ) : null}
      <div style={{ width: '85%', margin: 'auto' }}>
        <div
          className={`product_detail_header__b header_middle mt-3 ${size ? '' : 'header_middle'}`}
        >
          Other <strong>Products</strong>
        </div>
        <div className="mt-3">
          <List data={products.filter((p) => p.id !== id)} hover={size}></List>
        </div>
      </div>
      <OurPartner />
    </div>
  );
};

export default ProductDetail;
