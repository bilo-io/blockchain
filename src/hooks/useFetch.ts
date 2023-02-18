import { useState, useEffect, useMemo } from 'react'

interface FetchShape<T> {
  loading?: boolean
  data?: T
  error?: any
}

export const useFetch = <T>(request: {
  url: string
  payload?: any
  headers?: any
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}, cb?: Function) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any | any[]>(null)
  const [error, setError] = useState<any>(null)

  const fetchShape: FetchShape<T> = {}

  const slice = useMemo(() => {
    const result: FetchShape<T> = {
      data,
      loading,
      error
    }
    return result
  }, [data, loading, error])

  useEffect(() => {
    const controller = new AbortController()

    fetch(request.url, {
      method: request.method,
      mode: 'cors',
      headers: request.headers,
      body: request.payload,
      // used for aborting
      signal: controller.signal
    }).then((response) => {
      setData(response.json())
    }).catch((error: any) => {
      setError(error)
    }).finally(() => {
      setLoading(false)
    })

    return () => {
      controller.abort()
    }
  })

  return slice
}
