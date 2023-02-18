interface ITranslations {
  eng: {
    common: {
      block: string
      hash: string
      height: string
      mined: string
      miner: string
      search: string
      size: string
    }
    explore: {
      sidenav: {
        heading: string
      }
      content: {
        submit: string
        placeholder: string
        heading: string
      }
    }
  }
}

const translations: ITranslations = {
  eng: {
    common: {
      block: 'Block',
      hash: 'Hash',
      height: 'Height',
      mined: 'Mined',
      miner: 'Miner',
      search: 'Search',
      size: 'Size'
    },
    explore: {
      sidenav: {
        heading: 'Block Explorer'
      },
      content: {
        submit: 'Search',
        placeholder: 'Search for things like address, transaction, block',
        heading: 'Latest blocks'
      }
    }
  }
}

export default translations
