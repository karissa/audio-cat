const html = require('choo/html')

module.exports = function (state, emit) {
  if (!state.audio) return html``
  return html`
    <audio controls src="${state.audio}" autoplay></audio>
  `
}
