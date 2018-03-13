
export default function(element) {
  const offset = 64
  const timing = 300
  window.$('html, body').animate({
    scrollTop: window.$(element).offset().top - offset
  }, timing)
}
