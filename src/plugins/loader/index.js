import loaderFactory from './loaderFactory'

const install = Vue => {
  Object.defineProperty(Vue.prototype, '$loader', {
    get () {
      return loaderFactory(this)
    }
  })
}

export default { install }
