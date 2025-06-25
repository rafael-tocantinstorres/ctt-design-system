import 'ctt-design-system/dist/tokens/tokens.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, sans-serif;
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  )
}