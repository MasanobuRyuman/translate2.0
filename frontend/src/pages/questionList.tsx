import type { NextPage } from 'next'
import { signIn, signOut, useSession} from 'next-auth/react'
import { useRouter } from 'next/router';
import {useEffect} from 'react';

import { QuestionListPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const questionList: NextPage = () => {
  const QuestionData: IClassQuestion = FetchQuestionData()
  const { data: session,status } = useSession()
  const router = useRouter()
  useEffect(()=>{
    console.log(status)
    if (status === "unauthenticated"){
      router.push("/")
    }
  },[status])
  return (
    <div>
      <QuestionListPageTemplate questionData={QuestionData} />
    </div>
  )
}

export default questionList
