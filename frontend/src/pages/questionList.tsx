import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

import { QuestionListPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const questionList: NextPage = () => {
  const [questionData, setQuestionData] = useState<IClassQuestion | undefined>()
  const [loading, setLoading] = useState(true)
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
    const id: any = session?.userData
    const temp = await FetchQuestionData(id)
    setQuestionData(temp)
  }
  return (
    <div>
      {questionData ? (
        <QuestionListPageTemplate questionData={questionData} />
      ) : (
        <CircularProgress
          color='secondary'
          size={100}
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
          }}
        />
      )}
    </div>
  )
}

export default questionList
