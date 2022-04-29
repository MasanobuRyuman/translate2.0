import {Box} from '@mui/material'

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

export const TestArea = (props:IQuestion) =>{
  return(
    <div>
      <p>test</p>
      
    </div>
  )
}