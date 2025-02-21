import { CreateFixed } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { FixedCard } from 'widgets'

export const FixedListPage = () => (
  <Container>
    <AppBar title="고정지출 목록" actions={<CreateFixed />} />
    <Body>
      <div className="flex flex-col w-full">
        <FixedCard />
        <FixedCard />
        <FixedCard />
        <FixedCard />
      </div>
    </Body>
  </Container>
)
