import Vue from 'vue'

const scroll = Vue.directive('scroll', {
  inserted: function (el, binding) {
    window.addEventListener('scroll', function () {
      var elHeight = el.clientHeight
      var scroll = document.documentElement.scrollTop
      var dHeight = document.documentElement.clientHeight
      if (elHeight - scroll + 53 <= dHeight) {
        console.log('1111')
        console.log(binding.value)
      }
    })
  }
})

export {
  scroll
}
