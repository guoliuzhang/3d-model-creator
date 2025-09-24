import { Button, Flex, Image, Input, Space, Splitter, Typography } from "antd";

import { useRef, useState } from "react";
import styles from "./App.module.scss";
import image from "./assets/image.png";

const { Title, Text } = Typography;

function App() {
  const [text, setText] = useState("");

  const handleTextInputChange = (event) => {
    setText(event.target.value);
  };

  const handleTextInputEnter = (event) => {
    console.log(event.target.value);
  };

  const uploadInputRef = useRef(null);

  const handleUploadBtnClick = () => {
    uploadInputRef.current.click();
  };

  const [imagePreview, setImagePreview] = useState(null);

  const handleUploadInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenBtn = () => {
    console.log(text);
    console.log(imagePreview);
  };

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: 30 }}>
        <Title>Text Or Image → 3D Model</Title>
      </div>
      <Splitter>
        <Splitter.Panel collapsible>
          <div style={{ marginBottom: 10 }}>
            <Text>Text Prompt</Text>
          </div>
          <Input
            style={{ marginBottom: 30, width: "95%" }}
            placeholder="low-poly horse"
            value={text}
            onChange={handleTextInputChange}
            onPressEnter={handleTextInputEnter}
          />
          <Flex>
            <div className={styles.upload}>
              <Flex vertical>
                <div style={{ marginBottom: 10 }}>
                  <Text>or upload an image</Text>
                </div>
                <Flex align="center">
                  <Space>
                    <Image src={image} preview={false} width={60} height={40} />
                    <Button
                      style={{ width: 60, height: 30 }}
                      onClick={handleUploadBtnClick}
                    >
                      Upload
                    </Button>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      ref={uploadInputRef}
                      onChange={handleUploadInputChange}
                    />
                  </Space>
                </Flex>
              </Flex>
            </div>
            <Flex vertical style={{ width: "45%" }}>
              <Image
                src={imagePreview}
                preview={false}
                width={"100%"}
                height={200}
              />
            </Flex>
          </Flex>
          <div className={styles["gen-btn"]}>
            <Button
              style={{ width: 280, color: "#fff", backgroundColor: "#293755" }}
              onClick={handleGenBtn}
            >
              Generate
            </Button>
          </div>
        </Splitter.Panel>
        <Splitter.Panel>show</Splitter.Panel>
      </Splitter>
    </div>
  );
}

export default App;
