import { Box } from '@mui/material'
import React from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import {
  ClassQuestionList,
  ContentHeader,
  ContentPageSideArea,
  TranslateArea,
  ClassTestArea,
} from '../organisms'

interface IContentTemplateProps {
  questionData: IClassQuestion
}

export const ContentTemplate = (props: IContentTemplateProps) => {
  return (
    <div>
      <ContentHeader />
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <ContentPageSideArea />
        <Box>
          <TranslateArea />
          <ClassQuestionList questionData={props.questionData} />
          <ClassTestArea questionData={props.questionData}/>
        </Box>
      </Box>
    </div>
  )
}