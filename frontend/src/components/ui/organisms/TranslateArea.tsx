import { Box } from '@mui/material'
import React, { useState } from 'react'
import { englishTranslate } from '../../../pages/api/Translate'

import { DefaultButton, DefaultTextArea, H4 } from '../atoms'

interface ITranslateArea {
  englishTranslate: (EN: string) => Promise<{ result: any }>
  japaneseTranslate: (JP: string) => Promise<{ result: any }>
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

  return (
    <div>
      <Box
        sx={{
          width: 700,
          height: 400,
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box sx={{}}>
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
              Width={300}
              Height={200}
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
            <DefaultTextArea value={resultAreaValue} Width={300} Height={200} />
          </Box>
        </Box>
        <DefaultButton
          onClick={() => ChangeTranslate()}
          sx={{
            display: 'block',
            m: 'auto',
          }}
        >
          入れ替え
        </DefaultButton>
        <DefaultButton onClick={() => translate()}>翻訳</DefaultButton>
        <DefaultButton
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
