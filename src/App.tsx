import styled from '@emotion/styled'
import './App.css'
import Text from '@shared/Text'

const Button = styled.button`
  width: 200px;
  height: 100px;
`
function App() {
  return (
    <div>
      <Button>스타일 버튼</Button>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>
    </div>
  )
}

export default App
