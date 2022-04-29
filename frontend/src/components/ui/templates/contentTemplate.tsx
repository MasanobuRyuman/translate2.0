import React from 'react'

import {ContentHeader, TranslateArea ,TestArea} from '../organisms'

interface IQuestionData {
  id : number,
  questionId : number,
  EN : string,
  JP : string,
  classId : number,
  class : string,
}

interface IQuestion {
  questionData:IQuestionData[]
}

export const ContentTemplate = (prop:IQuestion)=>{
  return(
    <div>
      <ContentHeader />
      <TranslateArea />
      <TestArea questionData={prop.questionData}/>
    </div>
  )
}