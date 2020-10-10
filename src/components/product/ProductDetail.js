import React from 'react';
import { useParams } from 'react-router-dom';
import products from './product.json';
import Button from '../layout/Button';
import List from '../layout/List';
import { Tabs, Image, Menu, Table } from 'antd';
import Panner from '../layout/Panner';
const { TabPane } = Tabs;
const { SubMenu } = Menu;

const columns = [
  {
    title: () => <div style={{ color: '#415094' }}>SIZE</div>,
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: () => <div style={{ color: '#415094' }}>TOTAL LENGTH</div>,
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: () => <div style={{ color: '#415094' }}>WIDTH (mm)</div>,
    dataIndex: 'width',
    key: 'width',
  },
  {
    title: () => <div style={{ color: '#415094' }}>WEIGHT (g)</div>,
    dataIndex: 'weight',
    key: 'weight',
  },
];

const data = [
  {
    key: '1',
    size: 'X-Large',
    total: 'min 240',
    width: '75+/-5',
    weight: 'min 420',
  },
  {
    key: '2',
    size: 'Medium',
    total: 'min 240',
    width: '75+/-5',
    weight: 'min 420',
  },
  {
    key: '3',
    size: 'Large',
    total: 'min 240',
    width: '75+/-5',
    weight: 'min 420',
  },
  {
    key: '3',
    size: 'Small',
    total: 'min 240',
    width: '75+/-5',
    weight: 'min 420',
  },
  {
    key: '3',
    size: 'X-Small',
    total: 'min 240',
    width: '75+/-5',
    weight: 'min 420',
  },
];

const tab1 = [
  '/product-1-tab-1-1.png',
  '/product-1-tab-1-2.png',
  '/product-1-tab-1-3.png',
  '/product-1-tab-1-4.png',
];
const tab2 = [
  '/product-1-tab-1-1.png',
  '/product-1-tab-1-2.png',
  '/product-1-tab-1-3.png',
  '/product-1-tab-1-4.png',
];

const ProductDetail = () => {
  let { id: productId } = useParams();
  const { title, description, src_info } = products.find((p) => p.id === productId) || {};
  return (
    <div>
      <div style={{ width: '100%', display: 'flex', marginBottom: '30px' }}>
        <div
          style={{
            width: '50%',
            height: '600px',
            backgroundImage: `url(http://localhost:3000${src_info})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div style={{ width: '50%', padding: '50px' }}>
          <div style={{ fontSize: '50px', fontWeight: 'bold', color: '#da3849' }}>{title}</div>
          <div style={{ fontSize: '20px', marginBottom: '40px' }}>{description}</div>
          <Button width={300} height={80}>
            Contact us
          </Button>
        </div>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Nitrile" key="1">
          <Panner>
            <div>
              {tab1.map((i) => {
                return <Image src={i} width={300} height={280} className="item" />;
              })}
            </div>
          </Panner>
        </TabPane>
        <TabPane tab="Latex" key="2">
          <Panner>
            <div>
              {tab1.map((i) => {
                return <Image src={i} width={300} height={280} className="item" />;
              })}
            </div>
          </Panner>
        </TabPane>
      </Tabs>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#da3849',
        }}
      >
        Products detail
      </div>
      <Menu
        theme="light"
        style={{ width: '100%' }}
        defaultOpenKeys={['sub1']}
        selectedKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={<div style={{ height: '70px' }}>WIDTH & LENGTH</div>}
          className="custom-submenu"
        >
          <Menu.Item key="1" style={{ height: '400px', padding: '30px' }}>
            <Table
              className="custom-table"
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="THICKNESS (SINGLE WALL)" className="custom-submenu">
          <Menu.Item key="2" style={{ height: '400px', padding: '30px' }}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="PHYSICAL PROPERTIES" className="custom-submenu">
          <Menu.Item key="3" style={{ height: '400px', padding: '30px' }}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="QUALITY ASSURANCE" className="custom-submenu">
          <Menu.Item key="4" style={{ height: '400px', padding: '30px' }}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Menu.Item>
        </SubMenu>
      </Menu>
      <div
        style={{
          width: '85%',
          fontSize: '30px',
          margin: 'auto',
          color: '#101D78',
          marginTop: '30px',
        }}
      >
        Other <strong>Products</strong>
      </div>
      <div style={{ width: '85%', margin: 'auto', marginTop: '30px' }}>
        <List data={products.filter((p) => p.id !== productId)}></List>
      </div>
      <div
        style={{
          fontSize: '30px',
          color: '#101D78',
          width: '100%',
          textAlign: 'center',
          marginTop: '30px',
          marginBottom: '20px',
        }}
      >
        Our <strong>Partners</strong>
      </div>
      <div style={{ marginTop: '50px' }}>
        <Panner>
          <Image src="/logo-partner.png" width={150} />
          <Image src="/logo-partner.png" width={150} />
        </Panner>
      </div>
    </div>
  );
};

export default ProductDetail;
