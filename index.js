const html = require('choo/html')
const choo = require('choo')
const audio = require('./components/audio')

const app = choo()
app.use(require('./lib/audio'))

app.route('/', function (state, emit) {
  function red () {
    emit('audio:red')
  }
  function blue () {
    emit('audio:blue')
  }

  return html`
    <div class="buttons">
      <button class="red" onclick=${red}>red</button>
      <button class="blue" onclick=${blue}>blue</button>
      ${audio(state, emit)}
    </div>
  `
})

app.mount('#content')
