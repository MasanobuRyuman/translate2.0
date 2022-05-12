import { Box } from '@mui/material'
import React from 'react'

import { PageHeader, ContentPageSideArea, TranslateArea } from '../organisms'

interface IContentTemplateProps {
  children?: React.ReactNode
}

export const  ContentPageTemplate= (props: IContentTemplateProps) => {
  return (
    <div>
      <PageHeader />
      <Box
        sx={{
          display: {
            sm : 'flex',
            xs : 'block',
          }
        }}
      >
        <ContentPageSideArea />
        <Box
          sx={{
            m: 'auto',
            mt: 5,
          }}
        >
          {props.children}
        </Box>
      </Box>
    </div>
  )
}
