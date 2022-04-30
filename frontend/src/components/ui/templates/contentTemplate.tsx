import {Box} from '@mui/material'
import React from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import {TestArea} from '../molecules'
import {ClassQuestionList,ContentHeader,ContentPageSideArea,TranslateArea} from '../organisms'

interface IContentTemplateProps {
  questionData : IClassQuestion
}

export const ContentTemplate = (props:IContentTemplateProps)=>{
  return(
    <div>
      <ContentHeader />
      <Box sx={{
        display : "flex"
      }}>
        <ContentPageSideArea />
        <Box>
          <TranslateArea />
          <ClassQuestionList questionData={props.questionData} />
          <TestArea questionData={props.questionData}/>
        </Box>
      </Box>
    </div>
  )
}