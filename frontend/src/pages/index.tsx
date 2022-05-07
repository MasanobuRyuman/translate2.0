import type { NextPage } from 'next'
import { signIn, signOut, useSession} from 'next-auth/react'

import { TopPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const Home: NextPage = () => {
  const QuestionData: IClassQuestion = FetchQuestionData()
  const { data: session } = useSession()
  console.log(session)
  return (
    <div>
      <TopPageTemplate />
      <button onClick={()=>signIn("test")}>Sign in</button>
      <button onClick={()=>signOut()}>Sign out</button>
    </div>
  )
}

export default Home
