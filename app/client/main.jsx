import { render } from 'react-dom'
import App from './App.jsx'

Meteor.startup(() => {
  render(<App/>, document.getElementById('app'))
})
