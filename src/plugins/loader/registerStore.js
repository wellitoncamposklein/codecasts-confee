const registerStore = store => {
  store.registerModule('CODECAST_LOADER', {
    state: {
      show: false
    }
  })
}

export default registerStore
