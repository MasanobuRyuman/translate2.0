import { Box } from '@mui/material'
import React from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import {
  ContentHeader,
  ContentPageSideArea,
  ClassTestArea,
} from '../organisms'

interface IContentTemplateProps {
  questionData: IClassQuestion
}

export const TestPageTemplate = (props: IContentTemplateProps) => {
  return (
    <div>
      <ContentHeader />
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <ContentPageSideArea />
        <Box sx={{
          ml : 3,
        }}>
          <ClassTestArea questionData={props.questionData}/>
        </Box>
      </Box>
    </div>
  )
}