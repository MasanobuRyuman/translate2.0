/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
const translate = require('deepl')

export const englishTranslate = async (EN: string) => {
  const result = await translate({
    free_api: true,
    text: EN,
    target_lang: 'JA',
    auth_key: process.env.NEXT_PUBLIC_AUTH,
  })
  return { result }
}

export const japaneseTranslate = async (JP: string) => {
  const result = await translate({
    free_api: true,
    text: JP,
    target_lang: 'EN',
    auth_key: process.env.NEXT_PUBLIC_AUTH,
  })
  return { result }
}
