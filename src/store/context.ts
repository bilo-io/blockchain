import { type IAppTheme } from './../hooks/useAppTheme'
import { createContext } from 'react'
import { lightTheme } from 'styles/colors'

export const Context = createContext<{
  theme?: IAppTheme
}>({
  theme: {
    name: 'light',
    colors: lightTheme
  }
})
