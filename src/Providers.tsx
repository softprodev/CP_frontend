import React from 'react'
import { ModalProvider } from 'penguinfinance-uikit2'
import { Provider } from 'react-redux'
import { Web3ReactProvider } from '@web3-react/core'
import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { BlockContextProvider } from 'contexts/BlockContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ToastsProvider } from 'contexts/ToastsContext'
import { SettingContextProvider } from 'contexts/SettingContext'
import { MintingTokensContextProvider } from 'contexts/MintingTokensContext'
import { DAppProvider } from "@usedapp/core";

// import store from 'state'
import { getLibrary } from 'utils/web3React'
import store from "./redux/store";



const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <DAppProvider config={{}}>
          <ToastsProvider>
            <ThemeContextProvider>
              <SettingContextProvider>
                <LanguageContextProvider>
                  <RefreshContextProvider>
                    <BlockContextProvider>
                      <MintingTokensContextProvider>
                        <ModalProvider>{children}</ModalProvider>
                      </MintingTokensContextProvider>
                    </BlockContextProvider>
                  </RefreshContextProvider>
                </LanguageContextProvider>
              </SettingContextProvider>
            </ThemeContextProvider>
          </ToastsProvider>
        </DAppProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
