const install = Vue => {
  Object.defineProperty(Vue.prototype, '$loader', {
    get () {
      return {
        show: () => console.log({ show: this }),
        hide: () => console.log({ hide: this })
      }
    }
  })
}

export default { install }
