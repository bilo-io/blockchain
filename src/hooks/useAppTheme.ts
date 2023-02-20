import { Context } from '../store/context'
import { useContext, useEffect, useState } from 'react'
import { lightTheme } from 'styles/colors'

export interface IAppTheme {
  name: 'light' | 'dark'
  colors: {
    [key in string]: string
  }
}

export const themes = [
  {
    label: 'Light', value: 'light'
  },
  {
    label: 'Dark', value: 'dark'
  }
]

export const useAppTheme = (): IAppTheme => {
  const [appTheme, setAppTheme] = useState<IAppTheme>({
    name: 'light',
    colors: lightTheme
  })
  const context = useContext(Context)

  useEffect(() => {
    if (context.theme == null) {
      setAppTheme({
        name: 'light',
        colors: lightTheme
      })
    } else {
      setAppTheme(context.theme)
    }
  }, [context.theme])

  return appTheme
}
