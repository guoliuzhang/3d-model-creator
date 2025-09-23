import { Button, Image, Typography } from 'antd';
import image from './assets/image.png';

const { Title, Text } = Typography;

function App() {
  return (
    <div>
      <Title>Text Or Image → 3D Model</Title>
      <Text>Text Prompt</Text>
      <div>
        <Text>or upload an image</Text>
        <Image src={image} preview={false} />
        <Button>Upload</Button>
        <Button type="primary">Generate</Button>
      </div>
    </div>
  )
}

export default App
