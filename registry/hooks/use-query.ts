'use client'

import * as React from 'react'

export function useQuery<T>(fetcher: () => Promise<T>) {
  const [error, setError] = React.useState<Error | null>(null)
  const [data, setData] = React.useState<T | null>(null)
  const [status, setStatus] = React.useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const fetch = React.useCallback(async () => {
    setStatus('loading')
    try {
      const result = await fetcher()
      setData(result)
      setStatus('success')
    }
    catch (err) {
      setError(err as Error)
      setStatus('error')
    }
  }, [fetcher])

  const refetch = React.useCallback(() => {
    fetch()
  }, [fetch])

  return { data, error, status, refetch }
}
