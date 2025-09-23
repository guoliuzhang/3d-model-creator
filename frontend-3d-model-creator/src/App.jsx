import { Button, Flex, Image, Input, Space, Splitter, Typography } from "antd";

import styles from "./App.module.scss";
import image from "./assets/image.png";

const { Title, Text } = Typography;

function App() {
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
                    <Button style={{ width: 60, height: 30 }}>Upload</Button>
                  </Space>
                </Flex>
              </Flex>
            </div>
            <Flex vertical style={{ width: "45%" }}>
              <Image src={image} preview={false} width={"100%"} height={200} />
            </Flex>
          </Flex>
          <div className={styles["gen-btn"]}>
            <Button
              style={{ width: 280, color: "#fff", backgroundColor: "#293755" }}
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
