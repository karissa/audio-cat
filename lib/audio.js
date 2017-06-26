module.exports = function (state, emitter) {
  emitter.on('audio:red', function () {
    state.audio = ''
    emitter.emit('render')
    setTimeout(function () {
      state.audio = "http://firewall.pulsradio.com"
      emitter.emit('render')
    }, 500)
  })
  emitter.on('audio:blue', function () {
    state.audio = ''
    emitter.emit('render')
    setTimeout(function () {
      state.audio = 'http://206.190.136.212:5511/Live?icy=http'
      emitter.emit('render')
    }, 500)
  })
}
