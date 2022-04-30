import React from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import {TestArea,QuestionList} from '../molecules'
import {ContentHeader, TranslateArea} from '../organisms'

interface IContentTemplateProps {
  questionData : IClassQuestion
}

export const ContentTemplate = (props:IContentTemplateProps)=>{
  return(
    <div>
      <ContentHeader />
      <TranslateArea />
      <QuestionList questionData={props.questionData} />
      <TestArea questionData={props.questionData}/>
    </div>
  )
}