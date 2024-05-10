import { DemoFragment } from './DemoFragment'
import { HelloWorld } from './HelloWorld'

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(HelloWorld(), DemoFragment({ bar: 'Demo', foo: 'Fragment' }))
