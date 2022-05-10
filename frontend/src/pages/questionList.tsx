import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { QuestionListPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const questionList: NextPage = () => {
  const [questionData, setQuestionData] = useState<IClassQuestion | undefined>()
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    } else if (status === 'authenticated') {
      getQuestionData()
    }
  }, [status])

  const getQuestionData = async () => {
    const id = session?.user?.userId
    const temp = await FetchQuestionData(id)
    setQuestionData(temp)
  }
  return <div>{questionData && <QuestionListPageTemplate questionData={questionData} />}</div>
}

export default questionList
