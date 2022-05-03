import { Box } from '@mui/material'
import React from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import {
  ClassQuestionList,
  PageHeader,
  ContentPageSideArea,
  TranslateArea,
  ClassTestArea,
} from '../organisms'

interface IContentTemplateProps {
  questionData: IClassQuestion
  englishTranslate: (EN: any) => Promise<{ result: string }>
  japaneseTranslate: (JP: any) => Promise<{ result: string }>
}

export const TranslatePage = (props: IContentTemplateProps) => {
  return (
    <div>
      <PageHeader />
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <ContentPageSideArea />
        <Box
          sx={{
            m: 'auto',
            mt: 5,
          }}
        >
          <TranslateArea
            englishTranslate={(EN) => props.englishTranslate(EN)}
            japaneseTranslate={(JP) => props.japaneseTranslate(JP)}
          />
        </Box>
      </Box>
    </div>
  )
}
