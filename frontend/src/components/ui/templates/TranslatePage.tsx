import { Box } from '@mui/material'
import React from 'react'

import {
  PageHeader,
  ContentPageSideArea,
  TranslateArea,
} from '../organisms'

interface IContentTemplateProps {
  englishTranslate?: (EN: any) => Promise<{ result: any }>
  japaneseTranslate?: (JP: any) => Promise<{ result: any }>
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
