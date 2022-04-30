import React from 'react'

import { IClassQuestion } from '../../../pages/api/questions'
import {TestArea} from '../molecules'
import {ClassQuestionList,ContentHeader, TranslateArea} from '../organisms'

interface IContentTemplateProps {
  questionData : IClassQuestion
}

export const ContentTemplate = (props:IContentTemplateProps)=>{
  return(
    <div>
      <ContentHeader />
      <TranslateArea />
      <ClassQuestionList questionData={props.questionData} />
      <TestArea questionData={props.questionData}/>
    </div>
  )
}