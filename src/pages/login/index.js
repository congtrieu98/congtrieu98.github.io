import { Button, Col, Form, Input, Row } from "antd";

const Login = () => {
  return (
    <div>
      <Row justify="space-between" style={{ height: window.innerHeight }}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} style={{ alignSelf: 'center' }} className="paddingCol">
          <div>
            <Form
              name="formLogin"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              //   initialValues={{ remember: true }}
              //   onFinish={onFinish}
              //   onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
