import type { NextPage } from 'next'
import { signIn, signOut, useSession} from 'next-auth/react'
import { useRouter } from 'next/router';
import {useEffect} from 'react';

import { TestPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const test: NextPage = () => {
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
      <TestPageTemplate questionData={QuestionData} />
    </div>
  )
}

export default test
