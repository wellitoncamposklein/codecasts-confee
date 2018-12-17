const install = Vue => {
  Vue.prototype.$loader = {
    show () {
      console.log({ show: this })
    },
    hide () {
      console.log({ hide: this })
    }
  }
}

export default { install }
