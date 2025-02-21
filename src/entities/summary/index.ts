import { Account } from 'entities/account'
import { Category } from 'entities/category'
import { SuccessResponse } from 'entities/type'

import { generateQuery } from 'entities/generate-query'
import { DynamicQuery } from 'shared/types'
import { api } from '../api'

interface CreateSummaryBody {
  type: string
  accountId: string
  categoryId: string
  money: number
  datetime: string
}

export const apiCreateSummary = async (json: CreateSummaryBody) => {
  const response = await api.post(`/api/summary`, { json }).json()
  return response
}

export interface Summary {
  id: string
  type: 'expenditure' | 'income'
  money: number
  datetime: string
  category: Category
  account: Account
}

export const apiFetchSummariesByDate = async (
  params: Pick<DynamicQuery, 'year' | 'month'>,
) => {
  const response: SuccessResponse<Summary[]> = await api
    .get(`/api/summary${generateQuery(params)}`)
    .json()
  return response
}

export const apiFetchSummary = async ({ id }: Pick<DynamicQuery, 'id'>) => {
  const response: SuccessResponse<Summary> = await api
    .get(`/api/summary/${id}`)
    .json()
  return response
}

interface ModifySummaryBody extends CreateSummaryBody {
  id: string
}

export const apiModifySummary = async (json: ModifySummaryBody) => {
  const response: SuccessResponse<Summary> = await api
    .put(`/api/summary`, { json })
    .json()
  return response
}

export const apiRemoveSummary = async ({ id }: Pick<DynamicQuery, 'id'>) => {
  const response: SuccessResponse<Summary> = await api
    .delete(`/api/summary/${id}`)
    .json()

  return response
}

export const apiFetchSummariesByTopic = async ({
  topic,
  ...params
}: Pick<DynamicQuery, 'topic' | 'topicId' | 'lastId'>) => {
  const response: SuccessResponse<Summary[]> = await api
    .get(`/api/summary/topic/${topic}${generateQuery(params)}`)
    .json()

  return response
}
