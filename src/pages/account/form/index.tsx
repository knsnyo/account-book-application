import { Back, CreateAccount } from 'features/router'
import { AppBar, Body, Container, Form, Input } from 'shared/ui'

export const AccountFormPage = () => (
  <Container>
    <AppBar title="자산 추가" leading={<Back />} actions={<CreateAccount />} />
    <Body>
      <Form>
        <Input type="text" placeholder="자산 이름을 적어주세요." />
        <Input type="number" placeholder="잔액을 입력하세요." />
      </Form>
    </Body>
  </Container>
)
