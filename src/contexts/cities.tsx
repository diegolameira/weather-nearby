import * as React from 'react'

interface ContextInterface {
  city: any
  cities: any[]
  isLoading: boolean
  setCities: (promise: Promise<any[]>) => void
  setCity: (promise: Promise<any>) => void
}

const InitialState: ContextInterface = {
  city: {},
  cities: [],
  isLoading: false,
  setCities: () => {},
  setCity: () => {},
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

  const setCity = async (promise: Promise<any>) => {
    try {
      setState({ ...state, isLoading: true })
      const city = await promise
      debugger
      setState({ ...state, isLoading: false, city })
    } catch (e) {
      alert('Failed to get city, verify your internet and try again!')
      setState({ ...state, isLoading: false })
    }
  }

  return <Provider value={{ ...state, setCities, setCity }}>{children}</Provider>
}

export { Context as CitiesContext, CitiesProvider, CitiesConsumer }
