import './App.css'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'
import { useAlertContext } from '@contexts/AlertContext'
function App() {
  const { open } = useAlertContext()
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
      <Button color="success">클릭</Button>
      <Button>클릭</Button>
      <Button full disabled>
        클릭
      </Button>
      <Input placeholder="로그인" aria-invalid={true}></Input>
      <TextField />
      <TextField label="아이디" />
      <TextField label="비밀번호" hasError />
      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지에서 확인',
            onButtonClick: () => {
              //
            },
          })
        }}
      >
        Alert오픈
      </Button>
    </div>
  )
}

export default App
