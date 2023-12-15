export const GETRequest = async (url: string, asText = false): Promise<any> => {
  try {
    const response = await fetch(url)
    return asText ? response.text : await response.json()
  } catch (error: any) {
    return error
  }
}
