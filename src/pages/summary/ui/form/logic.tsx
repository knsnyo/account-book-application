import dayjs from 'dayjs'
import React from 'react'
import { IForm } from './type'

const init: IForm = {
  type: 'expenditure',
  card: '',
  money: '',
  category: '',
  datetime: dayjs().format('YYYY-MM-DDTHH:mm'),
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: IForm, action: { type: string; value?: any }) => {
  switch (action.type) {
    case 'type': {
      return { ...state, type: action.value }
    }
    case 'money': {
      try {
        const money = parseInt(action.value, 10)

        return { ...state, money }
      } catch {
        return state
      }
    }
    case 'category': {
      return { ...state, category: action.value }
    }
    case 'datetime': {
      return { ...state, datetime: action.value }
    }
    case 'card': {
      return { ...state, card: action.value }
    }
    default: {
      return init
    }
  }
}

export const useLogic = () => {
  const [state, dispatch] = React.useReducer(reducer, init)

  const handleType = (_: string) => () => dispatch({ type: 'type', value: _ })
  const handleCard: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: 'card', value: e.target.value })
  }
  const handleMoney: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: 'money', value: e.target.value })
  }
  const handleCategory: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: 'category', value: e.target.value })
  }

  const handleDatetime: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: 'datetime', value: e.target.value })
  }

  return {
    value: { ...state },
    handler: {
      type: handleType,
      card: handleCard,
      money: handleMoney,
      category: handleCategory,
      datetime: handleDatetime,
    },
  }
}
