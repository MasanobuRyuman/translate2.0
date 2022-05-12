import { Box } from '@mui/material'
import React from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import { ClassQuestionList, PageHeader, ContentPageSideArea } from '../organisms'
import { ContentPageTemplate } from './ContentPageTemplate'

interface IQuestionPageTemplateProps {
  questionData: IClassQuestion
}

export const QuestionListPageTemplate = (props: IQuestionPageTemplateProps) => {
  return (
    <div>
      <ContentPageTemplate>
        <ClassQuestionList questionData={props.questionData} />
      </ContentPageTemplate>
    </div>
  )
}
