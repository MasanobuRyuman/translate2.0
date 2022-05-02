import type { NextPage } from 'next'

import { TranslatePage } from '../components/ui/templates'
import { ENFromJPTramsLate }  from './api/Translate'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const Translate: NextPage = () => {
  const QuestionData: IClassQuestion = FetchQuestionData()

  const test=() => {
    console.log(ENFromJPTramsLate("run"))
  }
  return (
    <div>
      <TranslatePage questionData={QuestionData} />
      <button onClick={()=>test()}>test</button>
    </div>
  )
}

export default Translate
