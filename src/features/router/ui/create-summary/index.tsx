import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateSummary = () => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.createSummary}>
      추가
    </Button>
  )
}
