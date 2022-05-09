import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { TopPageTemplate } from '../components/ui/templates'
import { FetchQuestionData, IClassQuestion } from './api/questions'

const Home: NextPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    console.log(status)
    if (status === 'authenticated') {
      router.push('/translate')
    }
  }, [status])
  return (
    <div>
      <TopPageTemplate signIn={() => signIn()} />
    </div>
  )
}

export default Home
