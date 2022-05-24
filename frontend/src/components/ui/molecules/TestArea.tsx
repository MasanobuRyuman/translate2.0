/* eslint-disable react-hooks/exhaustive-deps */
import Edit from '@mui/icons-material/Edit'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'

import { IQuestion } from '../../../pages/api/questions'
import { DefaultBox,DefaultButton,DefaultSubHeading, H3, H4 } from '../atoms'
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
  const [openAnswer, setOpenAnswer] = useState(false)

  useEffect(() => {
    ChangeQuestion()
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
    setOpenAnswer(false)
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

  const displayAnswer = () => {
    setOpenAnswer(true)
  }

  return (
    <div>
      <Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              height: 200,
              ml : {
                sm : 0,
                xs :-3,
              }
            }}
          >
            <Box>
              <DefaultSubHeading><H3 sx={{
                textAlign:"center",
                mt : -0.5,
              }}>問題</H3></DefaultSubHeading>
              <Box sx={{
                width: {
                  md :200,
                  xs : 250,
                },
                mt: 2,
                ml:3,
              }}> 
                <H3 sx={{
                  overflowWrap: "break-word",
                }}>{question}</H3> 
              </Box>
            </Box>
            <Box sx={{
              mt: 6,
            }}>
              <DefaultSubHeading><H3 sx={{
                textAlign:"center",
                mt : -0.5,
              }}>答え</H3></DefaultSubHeading> 
            </Box>
            <Box sx={{
              mt: 2,
              ml: 3,
            }}>
              {openAnswer && <H3>{answer}</H3>}
            </Box>
          </Box>
          <Edit
            onClick={() => handleClickOpen()}
            sx={{
              width : 40,
              height : 40,
              position : "absolute",
              left : "80%"
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            mt: 17,
          }}
        >
          <Box
            sx={{
              ml: {
                sm : 2,
                xs : -2,
              }
            }}
          >
            <DefaultButton onClick={() => ChangeQuestionLanguage()} sx={{
              fontSize: 20,
              width :100,
            }}>切り替え</DefaultButton>
          </Box>
          <Box sx={{
            display : "flex",
            ml : {
              md : "60%",
              sm : "30%",
              xs : "20%",
            },
          }}>
            <DefaultButton onClick={() => displayAnswer()} sx={{
              fontSize : 20,
              width : 60,
            }}>答え</DefaultButton>
            <Box
              sx={{
                ml: 2,
              }}
            >
              <DefaultButton onClick={() => ChangeQuestion()} sx={{
                fontSize : 20,
                width :100,
              }}>次の問題</DefaultButton>
            </Box>
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




