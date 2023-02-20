// API reference:
// - https://www.blockchain.com/explorer/api/blockchain_api
// - https://www.blockchain.com/explorer/api/q

import { GETRequest } from 'utils/api'

const INFO_BASE_URL = 'https://blockchain.info'
const API_BASE_URL = 'https://api.blockchain.com/v3/exchange'

// https://blockhain.info/blocks/3600000?format=json
export const getBlocks = async (timeInMilliSeconds: string): Promise<any> => {
  const url = `${INFO_BASE_URL}/blocks/${timeInMilliSeconds}?format=json&cors=true`
  return await GETRequest(url)
}

// // https://blockhain.info/rawblock/00000000000000000002b3aa34a5c15fc6df0bfcc365f42419beb8eaae2749d9
// https://blockhain.info/rawblock/0000000000000538200a48202ca6340e983646ca088c7618ae82d68e0c76ef5a
// https://blockhain.info/rawblock
export const getBlock = async (blockHash: string): Promise<any> => {
  const url = `${INFO_BASE_URL}/rawblock/${blockHash}&cors=true`
  return await GETRequest(url)
}

export const getLatestBlock = async (): Promise<any> => {
  const url = `${INFO_BASE_URL}/latestblock`
  return await GETRequest(url)
}

// https://blockhain.info/rawtx/b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da
// 000000000000000000021f73cb41abaf28bb1740888bd6bc18453d62a7dfe627
export const getTransaction = async (transactionHash: string): Promise<any> => {
  const url = `${INFO_BASE_URL}/rawtx/${transactionHash}&cors=true`
  return await GETRequest(url)
}

// ====    ====    ====    ====    ====    ====    ====    ====    ====    ====    ====    ====    ====

export const getTickers = async (): Promise<any> => {
  const url = `${API_BASE_URL}/tickers`
  return await GETRequest(url)
}

export const getPrice = async (ticker: string): Promise<any> => {
  const url = `${API_BASE_URL}/tickers/${ticker}`
  return await GETRequest(url)
}

// https://api.blockchain.info/stats

export const getBlockCount = async (): Promise<any> => {
  const url = 'https://blockchain.info/q/getblockcount'
  return await GETRequest(url, true)
}
