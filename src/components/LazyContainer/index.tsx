import React, { FC, ReactNode, Suspense } from 'react'

type Props = {
  children: ReactNode,
  fallback?: ReactNode
}

const LazyContainer: FC<Props> = ({ children, fallback = <></> }) => (
  <>
    {typeof window !== 'undefined' ? (
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    ) : fallback}
  </>
)

export default LazyContainer
