import { IProps } from './type'

export const AppBar = (props: IProps) => (
  <header className="sticky top-0 flex flex-row items-center h-16 bg-white">
    {props.leading && <nav className="absolute left-4">{props.leading}</nav>}
    <p className="flex-1 text-center">{props.title}</p>
    {props.actions && <nav className="absolute right-4">{props.actions}</nav>}
  </header>
)

AppBar.defaultProps = {
  leading: undefined,
  actions: undefined,
}