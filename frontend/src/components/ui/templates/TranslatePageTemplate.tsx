import React from 'react'

import { TranslateArea } from '../organisms'
import { ContentPageTemplate } from './ContentPageTemplate'

interface ITranslatePageTemplateProps {
  englishTranslate: (EN: any) => Promise<{ result: any }>
  japaneseTranslate: (JP: any) => Promise<{ result: any }>
  userId: number
}

export const TranslatePageTemplate = (props: ITranslatePageTemplateProps) => {
  return (
    <div>
      <ContentPageTemplate>
        <TranslateArea
          englishTranslate={(EN) => props.englishTranslate(EN)}
          japaneseTranslate={(JP) => props.japaneseTranslate(JP)}
          userId={props.userId}
        />
      </ContentPageTemplate>
    </div>
  )
}
