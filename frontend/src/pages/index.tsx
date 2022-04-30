import type { NextPage } from 'next'

import {ContentTemplate} from '../components/ui/templates'
import { FetchQuestionData,IClassQuestion } from './api/questions'


const Home: NextPage = () => {
  const QuestionData:IClassQuestion = FetchQuestionData()
  return (
    <div>
      <ContentTemplate questionData={QuestionData}/>
    </div>
  )
}

export default Home
