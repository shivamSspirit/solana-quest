'use client'

import { Provider } from 'jotai'
import { FC } from 'react';

type Props = {
  children?: React.ReactNode
};

const Jotai: FC<Props> = ({ children }) => {
  return (
    <Provider>
      {children}
    </Provider>
  )
}

export default Jotai

