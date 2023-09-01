import { ProviderWrapper } from 'App/Modules/Setup/ProviderWrapper/ProviderWrapper'
import { AppLayout } from 'App/Modules/AppLayout/AppLayout'

function App() {
  return (
    <ProviderWrapper locale={'en'}>
      <AppLayout />
    </ProviderWrapper>
  )
}

export default App
