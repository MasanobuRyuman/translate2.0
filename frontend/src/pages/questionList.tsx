import type { NextPage } from 'next'

import { QuestionListPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const questionList: NextPage = () => {
  const QuestionData: IClassQuestion = FetchQuestionData()
  return (
    <div>
      <QuestionListPageTemplate questionData={QuestionData} />
    </div>
  )
}

export default questionList
