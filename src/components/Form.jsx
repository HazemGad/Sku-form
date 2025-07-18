import React from "react";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
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
    Modal,
    Checkbox,
  Upload
} from "antd";
import "./form.css";
const { Option } = Select;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e === null || e === void 0 ? void 0 : e.fileList;
};
const SkuForm = () => {
  const [form] = Form.useForm();
    const [openModal, SetOpenModal] = useState(false)
    const ModalOpen = () => {
        SetOpenModal(true);
    }
    const ModalClose = () => {
        SetOpenModal(false);
    }
  const categoryOptions = [
    { label: "Loyalty", value: "Loyalty" },
    { label: "Loyalty Integrations", value: "Loyalty Integrations" },
    { label: "Coupons", value: "Coupons" },
    { label: "Coupons Integrations", value: "Coupons Integrations" },
    { label: "Loyalty Referrals", value: "Loyalty Referrals" },
  ];
  return (
    <Card variant="borderless" className="Card-width">
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
                  SKU Name (English) <span className="text-red-500">*</span>{" "}
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
                  SKU Value <span className="text-red-500">*</span>{" "}
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
                  SKU Category <span className="text-red-500">*</span>{" "}
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
                options={categoryOptions}
                optionRender={(option) => (
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{option.label}</span>
                    <Checkbox />
                  </span>
                )}
                popupRender={(menu) => (
                  <>
                    {menu}
                    <Button type="link" block onClick={ModalOpen}>
                      + Create New Category
                    </Button>
                  </>
                )}
              />
            </Form.Item>

            <Row justify="space-between" style={{ height: 35 }}>
              <label>
                Use Value as Point
                <span className="text-red-500 p-2">*</span>
              </label>
              <Form.Item name="ValuesPoints" valuePropName="checked">
                <Switch style={{ width: 10 }} />
              </Form.Item>
            </Row>
            <Row justify="space-between" style={{ height: 35 }}>
              <label>
                No Expiry
                <span className="text-red-500 p-2">*</span>
              </label>
              <Form.Item name="expiry" valuePropName="checked">
                <Switch style={{ width: 10 }} />
              </Form.Item>
            </Row>
            <Row justify="space-between" style={{ height: 35 }}>
              <label>
                Accumlation SKU
                <span className="text-red-500 p-2">*</span>
              </label>
              <Form.Item name="accumlationnSku" valuePropName="checked">
                <Switch style={{ width: 10 }} />
              </Form.Item>
            </Row>
            <Row justify="space-between" style={{ height: 35 }}>
              <label>
                Allow limited subscription
                <span className="text-red-500 p-2">*</span>
              </label>
              <Form.Item name="subscriptionSku" valuePropName="checked">
                <Switch style={{ width: 10 }} />
              </Form.Item>
            </Row>
            <Row justify="space-between" style={{ height: 35 }}>
              <label>
                Redemption SKU
                <span className="text-red-500 p-2">*</span>
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
                  SKU Name (Arabic) <span className="text-red-500">*</span>{" "}
                </span>
              }
              rules={[{ required: true, message: "Please enter Arabic name" }]}
            >
              <Input placeholder="Enter Name" className="Input-height" />
            </Form.Item>

            <Form.Item
              name="skuCode"
              label={
                <span>
                  SKU Code <span className="text-red-500">*</span>{" "}
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
                  Offer number <span className="text-red-500">*</span>{" "}
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
                <span className="text-red-500 p-2">*</span>
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
        <Modal
          title="Add New Sku Category"
          open={openModal}
          onCancel={ModalClose}
          footer={[
            <Button key="cancel" onClick={ModalClose}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={ModalClose}>
              Save
            </Button>,
          ]}
        >
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  color: "inherit",
                  cursor: "inherit",
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="skuNameEn"
            label={
              <span>
                SKU Name (English) <span className="text-red-500">*</span>{" "}
              </span>
            }
            rules={[{ required: true, message: "Please enter name" }]}
            className="Form-width"
          >
            <Input placeholder="Enter Name" className="Input-height" />
          </Form.Item>
          <Form.Item
            name="skuNameEn"
            label={
              <span>
                SKU Name (English) <span className="text-red-500">*</span>{" "}
              </span>
            }
            rules={[{ required: true, message: "Please enter name" }]}
            className="Form-width"
          >
            <Input placeholder="Enter Name" className="Input-height" />
          </Form.Item>
        </Modal>
      </Form>
    </Card>
  );
};

export default SkuForm;
