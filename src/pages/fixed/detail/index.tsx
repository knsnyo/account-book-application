import { BackButton } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'

export const FixedDetailPage = () => (
  <Container>
    <AppBar title="고정지출명" leading={<BackButton />} />
    <Body>
      <p>TEST</p>
    </Body>
  </Container>
)