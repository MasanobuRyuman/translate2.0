import {Box} from '@mui/material'
import {useState,useEffect} from 'react'

import {IQuestion} from '../../../pages/api/questions'
import {DefaultButton, H3,H4} from '../atoms'

interface ITestAreaProps {
  questionData:IQuestion[]
}

export const TestArea = (props:ITestAreaProps)=>{
  const [questionData,setQuestionData] = useState<IQuestion>("")
  const [question,setQuestion] = useState<string>("")
  const [answer,setAnswer] = useState<string>("")
  const [nowQuestionLanguage,setNowQuestionLanguage] = useState<string>("EN")

  useEffect(()=>{
    ChangeQuestion()
  },[])

  const ChangeQuestion = ()=>{
    const listLength:number = props.questionData.length
    const randomNumber = Math.floor( Math.random() * listLength ) ;
    const nextQuestionData = props.questionData[randomNumber]
    console.log(nowQuestionLanguage)
    setQuestionData(nextQuestionData)
    if (nowQuestionLanguage == "JP"){
      setQuestion(nextQuestionData.JP)
      setAnswer(nextQuestionData.EN)
    }else{
      setQuestion(nextQuestionData.EN)
      setAnswer(nextQuestionData.JP)
    }
  }

  const ChangeQuestionLanguage = ()=>{
    const nowQuestion:string = question
    const nowAnswer:string = answer
    setQuestion(nowAnswer)
    setAnswer(nowQuestion)
    if (nowQuestionLanguage == "EN"){
      setNowQuestionLanguage("JP")

    }else{
      setNowQuestionLanguage("EN")
    }
  }

  return(
    <div>
      <H4>問題</H4>
      <H3>{question}</H3>
      <H4>答え</H4>
      <H3>{answer}</H3>
      <Box sx={{
        display : "flex",
        mt : 4,
      }}>
        <Box sx={{
          ml : 2,
        }}>
          <DefaultButton onClick={()=>ChangeQuestionLanguage()}>切り替え</DefaultButton>
        </Box>
        <Box sx={{
          ml : 2,
        }}>
          <DefaultButton onClick={()=>ChangeQuestion()}>次の問題</DefaultButton>
        </Box>
      </Box>
    </div>
  )
}