/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useState, useEffect } from 'react'
const translate = require('deepl')

const axiosInstance = axios.create()

export const englishTranslate = async (EN: string) => {
  const result = await translate({
    free_api: true,
    text: EN,
    target_lang: 'JA',
    auth_key: process.env.NEXT_PUBLIC_AUTH,
    // All optional parameters available in the official documentation can be defined here as well.
  })
  return { result }
}

export const japaneseTranslate = async (JP: string) => {
  const result = await translate({
    free_api: true,
    text: JP,
    target_lang: 'EN',
    auth_key: process.env.NEXT_PUBLIC_AUTH,
    // All optional parameters available in the official documentation can be defined here as well.
  })
  return { result }
}
