import {Box} from '@mui/material'
import React,{useState} from  'react'

import {DefaultButton,DefaultTextArea,H4} from '../atoms'

export const TranslateArea = ()=>{
  const [rightTranslateFiled,setRightTranslateFiled] = useState("英語")
  const [leftTranslateFiled,setLeftTranslateFiled] = useState("日本語")

  const ChangeTranslate = ()=>{
    const rightTranslate:string = rightTranslateFiled
    const leftTranslate:string = leftTranslateFiled
    setRightTranslateFiled(leftTranslate)
    setLeftTranslateFiled(rightTranslate)
  }
  return(
    <div>
      <Box sx={{
        width : 800,
        height : 400,
        border : "solid",
        borderColor : "red",
      }}>
        <Box sx={{
          display : "flex",
        }}>
          <Box sx={{
          }}>
            <H4 sx={{
              textAlign : "center",
            }}>{rightTranslateFiled}</H4>
            <DefaultTextArea Width={300} Height={200}/>
          </Box>
          <Box sx={{
            mr:0,
            ml:"auto",
          }}>
            <H4 sx={{
              textAlign : "center",
            }}>{leftTranslateFiled}</H4>
            <DefaultTextArea Width={300} Height={200}/>
          </Box>
        </Box>
        <DefaultButton onClick={()=>ChangeTranslate()} sx={{
          display: "block",
          m: "auto",
        }}>入れ替え</DefaultButton>
        <DefaultButton sx={{
          display: "block",
          m:"auto",
          mt: 2,
        }}>保存</DefaultButton>
      </Box>
    </div>
  )
}