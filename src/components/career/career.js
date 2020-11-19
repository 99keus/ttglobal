import React from 'react';
import { addInfoCareer } from '../../utils/spreadSheet';
import { Row, Col, Button, Form, Input } from 'antd';

const style = {
  form: {
    root: {
      padding: "25px 10vw 0 10vw"
    },
    title: {
      fontSize: "36px",
      lineHeight: "54px",
      color: "#DA3849",
      marginBottom: "10px"
    },
    button: {
      borderRadius: "5px",
      minWidth: '50px',
      marginBottom: '20px'
    },
    input: {
      backgroundColor: '#F5F5F5',
      borderRadius: '10px'
    }
  },
  image: {
  },
  banner: {
    maxWidth: '100%'
  }
}

const Career = () => {
  const [form] = Form.useForm();
  const onSubmit = data => {
    addInfoCareer([data]);
    form.resetFields();
  };

  return (
    <Row>
      <Col style={style.form.root} xs={24} lg={14}>
        <div>
          <p style={style.form.title}>
            <b>Started your Career <br />
              with T & T Global
            </b>
          </p>
          <Col span={24}>
            <p style={style.form.text}>
              T & T Global relies on professionals and managers who challenge the status quo in their particular career field.
              If you are looking to join a group of professionals with a future mindset. We offer unlimited opportunities for passionate employees.
              <br />
              <br />
              From sea and air freight and contract logistics, to operations, IT, HR and other corporate positions, there are many opportunities in their global logistics network.
            </p>
          </Col>
          <br />
          <Form
            wrapperCol={{ span: 24 }}
            layout="horizontal"
            size="large"
            onFinish={onSubmit}
            form={form}
          >
            <Form.Item name="name" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Name" style={style.form.input} />
            </Form.Item>
            <Form.Item name="phone_number" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Phone Number" style={style.form.input} />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Required' }, { type: 'email' }]}
            >
              <Input placeholder="Email" style={style.form.input} />
            </Form.Item>
            <p>
              *Your information is protected and will not be published , <br />
              read Our <u>Privacy Policy</u> for more details.
            </p>
            <br />
            <Button
              type="primary"
              size="large"
              style={style.form.button}
              danger
              htmlType="submit"
            >
              Send Now
            </Button>
          </Form>

        </div>
      </Col>
      <Col style={style.image} xs={24} lg={10}>
        <img src="/career-banner.png" style={style.banner} alt="T&T Global" />
      </Col>
    </Row>
  )
};

export default Career;

