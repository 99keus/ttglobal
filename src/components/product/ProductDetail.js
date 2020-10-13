import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../layout/Button';
import List from '../layout/List';
import { Tabs, Image, Menu } from 'antd';
import Panner from '../layout/Panner';
import { Row, Col } from 'antd';
import { ProductContext } from '../ProductContext';
import _ from 'lodash';

const { TabPane } = Tabs;
const { SubMenu } = Menu;

const ProductDetail = () => {
  const products = useContext(ProductContext);
  const [tab, setTab] = useState('nitrile');
  console.log('---- Products: ', products);

  let { id: productId } = useParams();
  const { title, description, thumbnail, image } = products.find((p) => p.id === productId) || {};
  const handleOnChange = (e) => {
    if (e !== tab) {
      setTab(e);
    }
  };
  return (
    <div>
      <Row>
        <Col xs={24} lg={12}>
          {thumbnail ? (
            <div
              style={{
                height: '60vh',
                backgroundImage: `url(${thumbnail})`,
              }}
              className="custom-image"
            ></div>
          ) : (
            <div className="unavailable-image" style={{ height: '60vh' }}>
              <div className="unavailable-image-blur">This product is temporarily unavailable</div>
            </div>
          )}
        </Col>
        <Col xs={24} lg={12}>
          <div className="product_description_container__detail">
            <div className="product_description_title__detail">
              <b>{title}</b>
            </div>
            <div className="product_description_content__detail">{description}</div>
            <div style={{ position: 'absolute', bottom: '40px', left: '60px' }}>
              {image ? (
                <Button width={250} height={50} borderRadius={10} fontSize={20} fontWeight="bold">
                  Contact us
                </Button>
              ) : (
                <div className="unavailable-text">We will update this product soon</div>
              )}
            </div>
          </div>
        </Col>
      </Row>
      {image ? (
        <div>
          <Tabs defaultActiveKey="nitrile" className="mt-3" onChange={handleOnChange}>
            <TabPane tab="Nitrile" key="nitrile">
              <Panner>
                {_.chunk(image.nitrile, 4).map((g) => {
                  return (
                    <div>
                      {g.map((i) => {
                        return <Image src={i} width={300} height={280} className="item" />;
                      })}
                    </div>
                  );
                })}
              </Panner>
            </TabPane>
            <TabPane tab="Latex" key="latex">
              <Panner>
              {_.chunk(image.latex, 4).map((g) => {
                  return (
                    <div>
                      {g.map((i) => {
                        return <Image src={i} width={300} height={280} className="item" />;
                      })}
                    </div>
                  );
                })}
              </Panner>
            </TabPane>
          </Tabs>
          <div className="product_detail_header header_middle mt-5 mb-5">Products detail</div>
          {tab === 'nitrile' ? (
            <Menu theme="light" style={{ width: '100%' }} mode="inline">
              <SubMenu key="sub1" title="WIDTH & LENGTH" className="custom-submenu">
                <Menu.Item key="1" style={{ height: '100%', padding: '30px' }}>
                  <Image width="100%" src={image.nitrileDetail[0]} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="THICKNESS (SINGLE WALL)" className="custom-submenu">
                <Menu.Item key="2" style={{ height: '100%', padding: '30px' }}>
                  <Image width="100%" src={image.nitrileDetail[1]} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title="PHYSICAL PROPERTIES" className="custom-submenu">
                <Menu.Item key="3" style={{ height: '100%', padding: '30px' }}>
                  <Image width="100%" src={image.nitrileDetail[2]} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title="QUALITY ASSURANCE" className="custom-submenu">
                <Menu.Item key="4" style={{ height: '100%', padding: '30px' }}>
                  <Image width="100%" src={image.nitrileDetail[3]} />
                </Menu.Item>
              </SubMenu>
            </Menu>
          ) : (
            <Menu theme="light" style={{ width: '100%' }} mode="inline">
              <SubMenu key="sub1" title="WIDTH & LENGTH" className="custom-submenu">
                <Menu.Item key="1" style={{ height: '100%', padding: '30px' }}>
                  <Image width="100%" src={image.latexDetail[0]} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="THICKNESS (SINGLE WALL)" className="custom-submenu">
                <Menu.Item key="2" style={{ height: '100%', padding: '30px' }}>
                  <Image width="100%" src={image.latexDetail[1]} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title="PHYSICAL PROPERTIES" className="custom-submenu">
                <Menu.Item key="3" style={{ height: '100%', padding: '30px' }}>
                  <Image width="100%" src={image.latexDetail[2]} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title="QUALITY ASSURANCE" className="custom-submenu">
                <Menu.Item key="4" style={{ height: '100%', padding: '30px' }}>
                  <Image width="100%" src={image.latexDetail[3]} />
                </Menu.Item>
              </SubMenu>
            </Menu>
          )}
        </div>
      ) : null}
      <div style={{ width: '85%', margin: 'auto' }}>
        <div className="product_detail_header__b mt-3">
          Other <strong>Products</strong>
        </div>
        <div className="mt-3">
          <List data={products.filter((p) => p.id !== productId)}></List>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div className="product_detail_header__b header_middle">
          Our <strong>Partners</strong>
        </div>
        <img
          src="/logo-circle.png"
          style={{ position: 'absolute', top: 0, height: '100%', right: 0 }}
          alt=""
        />
        <div style={{ padding: '30px' }}>
          <Panner>
            <Image src="/logo-partner.png" width={150} />
            <Image src="/logo-partner.png" width={150} />
          </Panner>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
