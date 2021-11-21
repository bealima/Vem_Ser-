import './App.css';
import { LoadingProvider } from './context/ContextLoading';
import { NoticiasProvider } from './context/ContextNoticias';
import { SetorProvider } from './context/ContextSetores';
import { TituloPaginaProvider } from './context/ContextTituloPagina';
import Routers from './Routers';


function App() {
  return (
    <div>
      <SetorProvider>
      <NoticiasProvider>
      <TituloPaginaProvider>
      <LoadingProvider>

        <Routers/>
        
      </LoadingProvider>
      </TituloPaginaProvider>
      </NoticiasProvider>
      </SetorProvider>
    </div>
  );
}

export default App;
