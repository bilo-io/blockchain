import { getLatestBlock } from 'services/blockchain'
import { useEffect, useState } from 'react'

export const useLatestBlockHeight = (): {
  data: any
  loading: boolean
  error: any
} => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any>(0)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    getLatestBlock()
      .then((response: any) => {
        setData(Number(response.height))
      })
      .catch((err: any) => { setError(err) })
      .finally(() => { setLoading(false) })
  }, [])

  return {
    data,
    loading,
    error
  }
}
