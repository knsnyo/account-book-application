import { AppBar } from '.'
import { Button } from '../button'

export default {
  component: AppBar,
  title: 'AppBar',
  tags: ['Shared'],
}

export const Default = {
  args: {
    title: <p>APPBAR TITLE TEST</p>,
  },
}
export const Leading = {
  args: {
    title: <p>APPBAR TITLE TEST</p>,
    leading: <p>Leading</p>,
  },
}
export const Actions = {
  args: {
    title: <p>APPBAR TITLE TEST</p>,
    actions: <p>Actions</p>,
  },
}
export const All = {
  args: {
    title: <p>APPBAR TITLE TEST</p>,
    leading: <p>Leading</p>,
    actions: <Button color="red" title="삭제" />,
  },
}
