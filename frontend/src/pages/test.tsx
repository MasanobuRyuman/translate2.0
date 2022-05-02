import type { NextPage } from 'next'

import { TestPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const test: NextPage = () => {
  const QuestionData: IClassQuestion = FetchQuestionData()
  return (
    <div>
      <TestPageTemplate questionData={QuestionData} />
    </div>
  )
}

export default test
