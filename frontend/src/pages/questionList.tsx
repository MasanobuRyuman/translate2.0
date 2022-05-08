import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { QuestionListPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const questionList: NextPage = () => {
  const { data: session, status } = useSession()
  console.log(session)
  let QuestionData: IClassQuestion = FetchQuestionData()
  const router = useRouter()
  useEffect(() => {
    console.log(status)
    if (status === 'unauthenticated') {
      router.push('/')
    }else if (status === 'authenticated'){
    }
  }, [status])
  return (
    <div>
      <QuestionListPageTemplate questionData={QuestionData} />
    </div>
  )
}

export default questionList
