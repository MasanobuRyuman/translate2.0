import { Box } from '@mui/material'
import React, { useState } from 'react'

import { CreateQuestion } from '../../../pages/api/questions'
import { DefaultButton, DefaultTextArea, H4 } from '../atoms'

interface ITranslateArea {
  englishTranslate: (EN: string) => Promise<{ result: any }>
  japaneseTranslate: (JP: string) => Promise<{ result: any }>
  userId: number
}

export const TranslateArea = (props: ITranslateArea) => {
  const [rightTranslateFiled, setRightTranslateFiled] = useState('英語')
  const [leftTranslateFiled, setLeftTranslateFiled] = useState('日本語')
  const [translateAreaValue, setTranslateAreaValue] = useState('')
  const [resultAreaValue, setResultAreaValue] = useState('')

  const ChangeTranslate = () => {
    const rightTranslate: string = rightTranslateFiled
    const leftTranslate: string = leftTranslateFiled
    setRightTranslateFiled(leftTranslate)
    setLeftTranslateFiled(rightTranslate)
  }

  const translate = async () => {
    let result: any
    if (rightTranslateFiled == '英語') {
      result = await props.englishTranslate(translateAreaValue)
    } else {
      result = await props.japaneseTranslate(translateAreaValue)
    }
    setResultAreaValue(result.result.data.translations[0].text)
  }

  const setTranslateValue = (e: any) => {
    setTranslateAreaValue(e?.currentTarget?.value)
  }

  const setTranslatedValue = (e: any) => {
    setResultAreaValue(e?.currentTarget?.value)
  }

  const saveQuestion = () => {
    console.log('saveQuestion')
    let english: string
    let japanese: string
    if (rightTranslateFiled == '英語') {
      english = translateAreaValue
      japanese = resultAreaValue
    } else {
      english = resultAreaValue
      japanese = translateAreaValue
    }
    CreateQuestion(props.userId, english, japanese, 1)
  }

  return (
    <div>
      <Box
        sx={{
          width: {
            lg: 900,
            md: 700,
            sm: 450,
          },
        }}
      >
        <DefaultButton
          onClick={() => ChangeTranslate()}
          sx={{
            display: 'block',
            m: 'auto',
          }}
        >
          入れ替え
        </DefaultButton>
        <Box
          sx={{
            display: {
              sm : 'flex',
              xs : "block",
            }
          }}
        >
          <Box>
            <H4
              sx={{
                textAlign: 'center',
              }}
            >
              {rightTranslateFiled}
            </H4>
            <DefaultTextArea
              value={translateAreaValue}
              onChange={(e) => setTranslateValue(e)}
              sx={{
                width: {
                  lg: 400,
                  md: 270,
                  xs: 200,
                },
                height: {
                  lg: 200,
                  xs: 150,
                },
                m:"auto",
              }}
            />
          </Box>
          <Box
            sx={{
              mr: 0,
              ml: 'auto',
            }}
          >
            <H4
              sx={{
                textAlign: 'center',
              }}
            >
              {leftTranslateFiled}
            </H4>
            <DefaultTextArea
              value={resultAreaValue}
              onChange={(e) => setTranslatedValue(e)} 
              sx={{
                width: {
                  lg: 400,
                  md: 270,
                  xs: 200,
                },
                height: {
                  lg: 200,
                  xs: 150,
                },
                m : "auto",
              }}
            />
          </Box>
        </Box>

        <DefaultButton
          onClick={() => translate()}
          sx={{
            display: 'block',
            m: 'auto',
            mt: 2,
          }}
        >
          翻訳
        </DefaultButton>
        <DefaultButton
          onClick={() => saveQuestion()}
          sx={{
            display: 'block',
            m: 'auto',
            mt: 2,
          }}
        >
          保存
        </DefaultButton>
      </Box>
    </div>
  )
}
