import { useRouter } from 'shared/lib'
import { SummaryProps } from './type'

export const Summary = ({ summary }: SummaryProps) => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      className="flex flex-row items-center gap-2"
      onClick={nav.summaryId('1')}
    >
      <div className="flex flex-col items-start flex-1">
        <p className="text-sm text-gray-600">{summary.category.name}</p>
        <p
          className={[
            'font-bold text-lg',
            `${summary.type === 'income' ? 'text-blue-600' : 'text-gray-600'}`,
          ].join(' ')}
        >
          {summary.money.toLocaleString()} 원
        </p>
      </div>
    </button>
  )
}
