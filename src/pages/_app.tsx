import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Figmage App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Figmage - Create stunning screenshots of webapps!"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
