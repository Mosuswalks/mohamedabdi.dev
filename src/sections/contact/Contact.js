import React from "react"
import {
  Row,
  Col,
  Divider,
  Typography,
  Form,
  Button,
  Input,
  Tooltip,
} from "antd"
import { SendOutlined } from "@ant-design/icons"

import styles from "./contact.module.less"

const { Title } = Typography

const Contact = () => {
  const layout = {
    labelCol: {
      offset: 4,
      span: 2,
    },
    wrapperCol: {
      span: 12,
    },
  }

  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 1,
    },
  }

  const submitForm = () => {
    console.log("Form Submitted")
  }

  return (
    <section id="#contact">
      <div className={styles.container}>
        <Row>
          <Col xs={{ offset: 3, span: 18 }}>
            <Title level={3} className={styles.title}>
              Contact
              <Divider style={{ background: "#000" }} />
            </Title>
          </Col>
        </Row>

        <Form
          {...layout}
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your First & Last name",
            },
          ]}
        >
          <Col>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your first & last name",
                },
              ]}
            >
              <Input className={styles.formInputs} />
            </Form.Item>
          </Col>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input className={styles.formInputs} />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            required={[
              {
                required: true,
                message: "Please enter a message",
              },
            ]}
          >
            <Input.TextArea className={styles.formInputs} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button shape="round" className={styles.formButton}>
              <SendOutlined />
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}

export default Contact
