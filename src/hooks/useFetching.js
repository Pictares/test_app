import { useState } from 'react'

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState('')

  const fetching = async () => {
    try {
      setIsLoading(true)
      await callback()
    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}
