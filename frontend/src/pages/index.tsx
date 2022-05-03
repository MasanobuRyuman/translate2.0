import type { NextPage } from 'next'

import { TopPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const Home: NextPage = () => {
  const QuestionData: IClassQuestion = FetchQuestionData()
  return (
    <div>
      <TopPageTemplate />
    </div>
  )
}

export default Home
