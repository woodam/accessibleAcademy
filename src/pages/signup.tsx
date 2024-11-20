import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React from "react";

interface Academy {
  name: string;
  description?: string;
  address?: string;
  phoneNumber?: string;
  email: string;
  password: string;
  website?: string;
}

const Signup: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: Academy) => {
    try {
      console.log("제출된 값:", values);
      const response = await axios.post(
        "http://localhost:3000/academy/signup",
        values,
      );
      console.log("API 응답:", response.data);
      message.success("학원 등록이 성공적으로 완료되었습니다!");
    } catch (error) {
      message.error("학원 등록에 실패했습니다.");
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{
        name: "",
        email: "",
        password: "",
        description: "",
        address: "",
        phoneNumber: "",
        website: "",
      }}
    >
      <Form.Item
        label="학원 이름"
        name="name"
        rules={[{ required: true, message: "학원 이름을 입력해 주세요!" }]}
      >
        <Input placeholder="학원 이름을 입력하세요" />
      </Form.Item>

      <Form.Item label="학원 설명" name="description">
        <Input.TextArea placeholder="학원에 대한 설명을 입력하세요" />
      </Form.Item>

      <Form.Item label="주소" name="address">
        <Input placeholder="학원 주소를 입력하세요" />
      </Form.Item>

      <Form.Item label="전화번호" name="phoneNumber">
        <Input placeholder="전화번호를 입력하세요" />
      </Form.Item>

      <Form.Item
        label="이메일"
        name="email"
        rules={[
          { required: true, message: "이메일을 입력해 주세요!" },
          { type: "email", message: "유효한 이메일을 입력해 주세요!" },
        ]}
      >
        <Input placeholder="이메일을 입력하세요" />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해 주세요!" }]}
      >
        <Input.Password placeholder="비밀번호를 입력하세요" />
      </Form.Item>

      <Form.Item label="웹사이트" name="website">
        <Input placeholder="웹사이트 URL을 입력하세요" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          학원 등록하기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;
