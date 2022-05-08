import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { TranslatePage } from '../components/ui/templates'
import { englishTranslate, japaneseTranslate } from './api/Translate'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const Translate: NextPage = () => {
  const QuestionData: IClassQuestion = FetchQuestionData()
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    console.log(status)
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status])

  return (
    <div>
      <TranslatePage
        englishTranslate={(EN) => englishTranslate(EN)}
        japaneseTranslate={(JP) => japaneseTranslate(JP)}
      />
    </div>
  )
}

export default Translate
