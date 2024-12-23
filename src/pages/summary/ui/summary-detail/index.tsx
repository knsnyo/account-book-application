import { Back, ModifySummary } from 'features/router'
import { AppBar, Body, Button, ButtonGroup, Container } from 'shared/ui'

const DetailButton = (props: { title: string; content: string }) => (
  <button
    type="button"
    className="flex flex-row items-center justify-between w-full py-2"
  >
    <p>{props.title}</p>
    <p className="text-blue-600">{props.content}</p>
  </button>
)

export const SummaryDetailPage = () => (
  <Container>
    <AppBar
      title="상세 내역"
      leading={<Back />}
      actions={
        <ButtonGroup>
          <ModifySummary id="123123" />
          <Button color="red" type="button">
            삭제
          </Button>
        </ButtonGroup>
      }
    />
    <Body>
      <p className="font-bold text">2024. 12. 12</p>
      <br />
      <div className="flex flex-col items-start w-full">
        <p className="text-xs">카테고리 이름</p>
        <p className="text-xl font-bold">{(20000).toLocaleString()} 원</p>
      </div>
      <br />
      <DetailButton title="카테고리" content="카테고리" />
      <DetailButton title="메모" content="메모를 남겨보세요" />
    </Body>
  </Container>
)
