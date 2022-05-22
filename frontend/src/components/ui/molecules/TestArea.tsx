import { Box } from '@mui/material'
import Edit from '@mui/icons-material/Edit'
import { useState, useEffect } from 'react'

import { IQuestion } from '../../../pages/api/questions'
import { DefaultButton, H3, H4 } from '../atoms'
import { EditQuestionDialog } from './EditQuestionDialog'

interface ITestAreaProps {
  questionData: IQuestion[]
}

export const TestArea = (props: ITestAreaProps) => {
  const [open, setOpen] = useState(false)
  const [questionId, setQuestionId] = useState(0)
  const [english, setEnglish] = useState('')
  const [japanese, setJapanese] = useState('')
  const [questionClass, setQuestionClass] = useState('')
  const [questionData, setQuestionData] = useState<IQuestion>()
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [nowQuestionLanguage, setNowQuestionLanguage] = useState<string>('EN')

  useEffect(() => {
    ChangeQuestion()
    console.log(props.questionData)
  }, [])

  const ChangeQuestion = () => {
    const listLength: number = props.questionData.length
    if (listLength == 0) return
    const randomNumber = Math.floor(Math.random() * listLength)
    const nextQuestionData = props.questionData[randomNumber]
    console.log(nextQuestionData)
    setQuestionData(nextQuestionData)
    setQuestionId(nextQuestionData.questionId)
    setJapanese(nextQuestionData.JP)
    setEnglish(nextQuestionData.EN)
    setQuestionClass(nextQuestionData.className)
    if (nowQuestionLanguage == 'JP') {
      setQuestion(nextQuestionData.JP)
      setAnswer(nextQuestionData.EN)
    } else {
      setQuestion(nextQuestionData.EN)
      setAnswer(nextQuestionData.JP)
    }
  }

  const ChangeQuestionLanguage = () => {
    const nowQuestion: string = question
    const nowAnswer: string = answer
    setQuestion(nowAnswer)
    setAnswer(nowQuestion)
    if (nowQuestionLanguage == 'EN') {
      setNowQuestionLanguage('JP')
    } else {
      setNowQuestionLanguage('EN')
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <Box>
        <Box sx={{
          display: "flex"
        }}>
          <Box>
            <H4>問題</H4>
            <H3>{question}</H3>
            <H4>答え</H4>
            <H3>{answer}</H3>
          </Box>
          <Edit onClick={()=>handleClickOpen()} sx={{
            ml : 10,
          }}/>
        </Box>
      
        <Box
          sx={{
            display: 'flex',
            mt: 4,
          }}
        >
          <Box
            sx={{
              ml: 2,
            }}
          >
            <DefaultButton onClick={() => ChangeQuestionLanguage()}>切り替え</DefaultButton>
          </Box>
          <Box
            sx={{
              ml: 2,
            }}
          >
            <DefaultButton onClick={() => ChangeQuestion()}>次の問題</DefaultButton>
          </Box>
        </Box>
      </Box>
      <EditQuestionDialog
        open={open}
        setOpen={(value: boolean) => setOpen(value)}
        questionId={questionId}
        english={english}
        japanese={japanese}
        class={questionClass}
      />
    </div>
  )
}
