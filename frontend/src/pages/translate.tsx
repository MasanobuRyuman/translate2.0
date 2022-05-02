import type { NextPage } from 'next'

import { TranslatePage } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const Translate: NextPage = () => {
  const QuestionData: IClassQuestion = FetchQuestionData()
  return (
    <div>
      <TranslatePage questionData={QuestionData} />
    </div>
  )
}

export default Translate
