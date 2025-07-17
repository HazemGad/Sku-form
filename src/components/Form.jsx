import React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  Switch,
  Space,
  Card,
} from "antd";
import "./form.css";
const { Option } = Select;

const SkuForm = () => {
  const [form] = Form.useForm();

  return (
    <Card  variant="borderless" className="Card-width">
      <Form
        form={form}
        layout="vertical"
        style={{
          maxWidth: "100%",
          padding: 24,
          background: "#fff",
          borderRadius: 8,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="skuNameEn"
              label={
                <span>
                  SKU Name (English) <span style={{ color: "red" }}>*</span>{" "}
                </span>
              }
              rules={[{ required: true, message: "Please enter name" }]}
              className="Form-width"
            >
              <Input placeholder="Enter Name" className="Input-height" />
            </Form.Item>

            <Form.Item
              name="skuValue"
              label={
                <span>
                  SKU Value <span style={{ color: "red" }}>*</span>{" "}
                </span>
              }
              className="Form-width"
              rules={[{ required: true, message: "Please enter value" }]}
            >
              <Input placeholder="Enter Factor" className="Input-height" />
            </Form.Item>

            <Form.Item
              name="category"
              label={
                <span>
                  SKU Category <span style={{ color: "red" }}>*</span>{" "}
                </span>
              }
              className="Form-width"
              rules={[{ required: true, message: "Please select category" }]}
            >
              <Select
                mode="multiple"
                placeholder="Select Category"
                className="Input-height"
                maxTagCount="responsive"
                popupRender={(menu) => (
                  <>
                    {menu}
                    <Button type="link" block>
                      + Create New Category
                    </Button>
                  </>
                )}
              >
                <Option value="Loyalty">Loyalty</Option>
                <Option value="Loyalty Integrations">
                  Loyalty Integrations
                </Option>
                <Option value="Coupons">Coupons</Option>
                <Option value="Coupons Integrations">
                  Coupons Integrations
                </Option>
                <Option value="Loyalty Referrals">Loyalty Referrals</Option>
              </Select>
            </Form.Item>

            <Row justify="space-between" style={{ height: 35 }}>
              <label>
                Redemption SKU
                <span style={{ color: "red", padding: "4px" }}>*</span>
              </label>
              <Form.Item name="redemptionSku" valuePropName="checked">
                <Switch style={{ width: 10 }} />
              </Form.Item>
            </Row>
          </Col>

          <Col span={12}>
            <Form.Item
              name="skuNameAr"
              label={
                <span>
                  SKU Name (Arabic) <span style={{ color: "red" }}>*</span>{" "}
                </span>
              }
              rules={[{ required: true, message: "Please enter Arabic name" }]}
            >
              <Input placeholder="Enter Code" className="Input-height" />
            </Form.Item>

            <Form.Item
              name="skuCode"
              label={
                <span>
                  SKU Code <span style={{ color: "red" }}>*</span>{" "}
                </span>
              }
              className="Form-width"
              rules={[{ required: true, message: "Please enter SKU code" }]}
            >
              <Input placeholder="Enter Code" className="Input-height" />
            </Form.Item>

            <Form.Item
              name="offerNumber"
              label={
                <span>
                  Offer number <span style={{ color: "red" }}>*</span>{" "}
                </span>
              }
              className="Form-width"
              rules={[{ required: true, message: "Please enter offer points" }]}
            >
              <Input placeholder="Enter Points" className="Input-height" />
            </Form.Item>

            <Row justify="space-between" style={{ height: 35 }}>
              <label>
                Check duration
                <span style={{ color: "red", padding: "4px" }}>*</span>
              </label>
              <Form.Item name="toggleCheckDuration" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Row>

            <Form.Item
              name="checkDuration"
              className="Form-width"
              rules={[{ required: true, message: "Please enter plan" }]}
            >
              <Input placeholder="Enter Plan" className="Input-height" />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="space-between">
          <Col>
            <Button htmlType="button" className="Cancel-button">
              Cancel
            </Button>
          </Col>

          <Col>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "8rem" }}
              className="Save-button"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default SkuForm;
