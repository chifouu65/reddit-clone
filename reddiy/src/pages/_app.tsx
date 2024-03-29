import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "../chakra/theme";
import {Layout} from "../components/layout/layout";
import {RecoilRoot} from "recoil";
// @ts-ignore
function App({ Component, pageProps }: AppProps) {
    return (
      <RecoilRoot>
          <ChakraProvider theme={theme}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </ChakraProvider>
      </RecoilRoot>
  )
}

export default App
