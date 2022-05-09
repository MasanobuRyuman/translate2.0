import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { TranslatePageTemplate } from '../components/ui/templates'
import { englishTranslate, japaneseTranslate } from './api/Translate'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const Translate: NextPage = () => {
  const [userId, setUserId] = useState(0)

  let QuestionData: IClassQuestion
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    console.log(status)
    if (status === 'unauthenticated') {
      router.push('/')
    } else if (status === 'authenticated') {
      const id = session?.user?.userId
      setUserId(id)
    }
  }, [status])

  return (
    <div>
      <TranslatePageTemplate
        englishTranslate={(EN) => englishTranslate(EN)}
        japaneseTranslate={(JP) => japaneseTranslate(JP)}
        userId={userId}
      />
    </div>
  )
}

export default Translate
