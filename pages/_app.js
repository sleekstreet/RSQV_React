import App from 'next/app'
import 'tailwindcss/tailwind.css'
import 'styles/style.css'
import { CounterProvider } from '../components/Counter'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    )
  }
}

export default MyApp
