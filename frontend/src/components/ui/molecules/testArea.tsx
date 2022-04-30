import {Box} from '@mui/material'

interface IQuestionFormat {
  id : number,
  questionId : number,
  EN : string,
  JP : string,
  classId : number,
  class : string,
}

interface IClassQuestion {
  classId_1:IQuestionFormat[]
  classId_2:IQuestionFormat[]
  classId_3:IQuestionFormat[]
}
interface IQuestionData {
  questionData : IClassQuestion
}

export const TestArea = (props:IQuestionData) =>{
  return(
    <div>
      <p>test</p>
      
    </div>
  )
}