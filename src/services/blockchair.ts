// API Reference:
// https://blockchair.com/api/docs#link_M3
import { GETRequest } from 'utils/api'

const API_BASE_URL = 'https://api.blockchair.com'

// https://api.blockchair.com/bitcoin/raw/block/0
export const getBlock = async (height: string | number): Promise<any> => {
  const url = `${API_BASE_URL}/bitcoin/raw/block/${height}`
  return await GETRequest(url)
}

// https://api.blockchair.com//bitcoin/blocks?s=id(desc)&limit=10&offset=0
export const getBlocks = async (height: string | number): Promise<any> => {
  const url = `${API_BASE_URL}/bitcoin/blocks?s=id(desc)&limit=10&offset=0`
  return await GETRequest(url)
}

// https://api.blockchair.com/bitcoin/raw/transaction/5eaa30c43581510c555f94fa36899da775045fa458d88323a7cb68d9436a177b
export const getTransactions = async (txHash: string): Promise<any> => {
  const url = `${API_BASE_URL}/bitcoin/raw/transaction/${txHash}`
  return await GETRequest(url)
}

export interface IBlockchairBlock {
  guessed_miner: string
  id: number
  difficulty: number
  merkle_root: string
  version: string
  bits: number
  weights: number
  size: number
  reward_usd: number
  fee_total_usd: number
  nonce: number
  hash: string
}
