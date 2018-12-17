import module from './vuex'

const registerStore = store => {
  store.registerModule('CODECAST_LOADER', { ...module })
}

export default registerStore
