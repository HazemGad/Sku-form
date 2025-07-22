import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ShadowBar from "./ShadowBar";
import SuccessIcon from "./success-icon";
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
  Upload,
  Divider,
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
  const [categoryOptions, setCategoryOptions] = useState([
    { label: "Loyalty", value: "Loyalty" },
    { label: "Loyalty Integrations", value: "Loyalty Integrations" },
    { label: "Coupons", value: "Coupons" },
    { label: "Coupons Integrations", value: "Coupons Integrations" },
    { label: "Loyalty Referrals", value: "Loyalty Referrals" },
  ]);

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [openModal, SetOpenModal] = useState(false);
  const [congrats, Setcongrats] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const ModalOpen = () => {
    SetOpenModal(true);
  };
  const ModalClose = () => {
    SetOpenModal(false);
  };
  const CongrateOpen = () => {
    Setcongrats(true);
    setTimeout(() => {
      Setcongrats(false);
      navigate("/skus"); //add here the path
    }, 3000);
  };
  const CancelReset = () => {
    form.resetFields();
    navigate("/skus"); //add here the path
  };
  const CongrateClose = () => {
    Setcongrats(false);
  };
  const ModalSaveClose = () => {
    if (newCategory.trim() === "") return;

    const newOption = {
      label: newCategory,
      value: newCategory,
    };

    setCategoryOptions((prev) => [...prev, newOption]);

    SetOpenModal(false);
    setNewCategory("");
  };

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
                popupRender={(menu) => (
                  <>
                    <Button type="link" block onClick={ModalOpen}>
                      + Create New Category
                    </Button>
                    {menu}
                  </>
                )}
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
              />
            </Form.Item>

            <Row
              style={{
                height: 35,
                justifyContent: "space-between",
                width: "19rem",
              }}
            >
              <label>
                Use Value as Point
                <span className="text-red-500 p-2">*</span>
              </label>
              <Form.Item name="ValuesPoints" valuePropName="checked">
                <Switch style={{ width: 10 }} />
              </Form.Item>
            </Row>
            <Row
              style={{
                height: 35,
                justifyContent: "space-between",
                width: "19rem",
              }}
            >
              <label>
                No Expiry
                <span className="text-red-500 p-2">*</span>
              </label>
              <Form.Item name="expiry" valuePropName="checked">
                <Switch style={{ width: 10 }} />
              </Form.Item>
            </Row>
            <Row
              style={{
                height: 35,
                justifyContent: "space-between",
                width: "19rem",
              }}
            >
              <label>
                Accumlation SKU
                <span className="text-red-500 p-2">*</span>
              </label>
              <Form.Item name="accumlationnSku" valuePropName="checked">
                <Switch style={{ width: 10 }} />
              </Form.Item>
            </Row>
            <Row
              style={{
                height: 35,
                justifyContent: "space-between",
                width: "19rem",
              }}
            >
              <label>
                Allow limited subscription
                <span className="text-red-500 p-2">*</span>
              </label>
              <Form.Item name="subscriptionSku" valuePropName="checked">
                <Switch style={{ width: 10 }} />
              </Form.Item>
            </Row>
            <Row
              style={{
                height: 35,
                justifyContent: "space-between",
                width: "19rem",
              }}
            >
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
              className="Form-width"
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

            <Row
              justify="space-between"
              style={{ height: 35, width: "31.4rem" }}
            >
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
            <Button
              htmlType="button"
              className="Cancel-button"
              onClick={CancelReset}
              navigate
            >
              Cancel
            </Button>
          </Col>

          <Col>
            <Button
              type="primary"
              htmlType="submit"
              className="Save-button"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
      <div>
        <Modal
          title="Add New Sku Category"
          open={openModal}
          onCancel={ModalClose}
          footer={[
            <Row className="ButtonsPad" style={{}}>
              <Col></Col>

              <Col className="btnGroup" style={{ justifyContent: "end" }}>
                <Button
                  htmlType="button"
                  className="CancelModal"
                  onClick={() => {
                    ModalClose();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "8rem" }}
                  className="Create-button "
                  onClick={() => {
                    CongrateOpen();
                    ModalClose();
                  }}
                  disabled={newCategory.trim() === ""}
                >
                  Create
                </Button>
              </Col>
            </Row>,
          ]}
        >
          <label className="ml-3 font-bold ">Update logo</label>
          <Form.Item
            valuePropName="fileList"
            getValueFromEvent={normFile}
            className="mt-2"
          >
            <Upload
              action="/upload.do"
              listType="picture-card"
              style={{ margin: "0.4rem 0 0 0.1rem" }}
              maxCount={1}
              fileList={fileList}
              onChange={({ fileList: newFileList }) => {
                setFileList(newFileList);
              }}
              onRemove={() => {
                setFileList([]);
              }}
            >
              {fileList.length >= 1 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Divider style={{ borderColor: "grey" }} />
          <Form.Item
            name="skuNameEn"
            label={
              <span>
                English Name <span className="text-red-500">*</span>{" "}
              </span>
            }
            rules={[{ required: true, message: "Enter Client name (English)" }]}
            className="Form-width"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input
              placeholder="Enter Name"
              value={newCategory}
              className="Input-height InputModalWidth"
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="skuNameEn"
            label={<span>Arabic Name </span>}
            rules={[{ message: "Enter Client name (Arabic)" }]}
            className="Form-width"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input
              placeholder="Enter Name"
              className="Input-height InputModalWidth"
            />
          </Form.Item>
        </Modal>
      </div>
      <div>
        <Modal open={congrats} footer={null} width={424} closable={false}>
          <div style={{ height: 281 }}>
            <Row
              justify="center"
              align="middle"
              style={{ padding: "2rem 0 0 0 " }}
            >
              <SuccessIcon />
            </Row>
            <Row
              justify="center"
              align="middle"
              style={{ padding: "0 0 3.5rem 0" }}
            >
              <ShadowBar />
            </Row>
            <h1
              className="font-bold text-[24px] leading-[100%] tracking-normal text-center font-[Poppins]"
              style={{ padding: "0 0 1rem 0" }}
            >
              Congratulations,
            </h1>
            <h3 className="font-normal text-[16px] leading-[100%] tracking-normal text-center font-[Poppins] text-[#A1A5B7]">
              SKU has been successfully added!
            </h3>
          </div>
        </Modal>
      </div>
    </Card>
  );
};
1;
export default SkuForm;
