import type { NextPage } from 'next'

import {ContentTemplate} from '../components/ui/templates'

const tempQuestionData = [
  {id:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
  {id:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
  {id:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
  {id:1,questionId:1,EN:"test",JP:"テスト",classId:1,class:"わからない"},
]

const Home: NextPage = () => {
  return (
    <div>
      <ContentTemplate questionData={tempQuestionData}/>
    </div>
  )
}

export default Home
