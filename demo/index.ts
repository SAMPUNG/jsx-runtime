import { HelloWorld } from './HelloWorld'

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(HelloWorld())
