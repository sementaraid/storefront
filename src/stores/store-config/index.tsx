import {createContext, ReactNode, useContext} from "react";
import {default as data} from "~/generated/config.json";
import {mapValues} from "lodash";
import {IStoreConfig} from "~/stores/store-config/type"

interface IStoreConfigProviderProps{
  children: ReactNode | any,
}

const defaultValue = mapValues({...data.storeConfig}, () => null)
const StoreConfigContext = createContext<IStoreConfig>(defaultValue);

function StoreConfixContextProvider ({ children}: IStoreConfigProviderProps){
  return (
    <StoreConfigContext.Provider value={data.storeConfig}>
      {children}
    </StoreConfigContext.Provider>
  )
}

function useStoreConfig () {
  return useContext(StoreConfigContext)
}

export {
  StoreConfixContextProvider,
  useStoreConfig
}