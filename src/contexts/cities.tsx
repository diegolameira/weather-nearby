import * as React from 'react'

interface ContextInterface {
  cities: any[]
  isLoading: boolean
  setCities: (promise: Promise<any[]>) => void
}

const InitialState: ContextInterface = {
  cities: [],
  isLoading: false,
  setCities: () => {},
}

const Context = React.createContext<ContextInterface>(InitialState)
const { Provider, Consumer: CitiesConsumer } = Context

const CitiesProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<ContextInterface>(InitialState)
  const setCities = async (promise: Promise<any[]>) => {
    try {
      setState({ ...state, isLoading: true })
      const cities = await promise
      setState({ ...state, isLoading: false, cities })
    } catch (e) {
      alert('Failed to get cities, verify your internet and try again!')
      setState({ ...state, isLoading: false })
    }
  }
  return <Provider value={{ ...state, setCities }}>{children}</Provider>
}

export { Context as CitiesContext, CitiesProvider, CitiesConsumer }
