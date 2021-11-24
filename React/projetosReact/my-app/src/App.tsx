import axios from 'axios';
import { appendFile } from 'fs';
import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List';

interface IState {
  usuario: {
    id: number,    
    avatar_url: string,
    url: string,
    html_url: string,
    repos_url: string,
    name: string,
    company: string,
    location: string,
    email: string,
    hireable: string,
    bio: string,
    public_repos: number,
    created_at?: number,
    updated_at?: number
   
  }[]
}

function App() {
  const [usuario, setUsuario] = useState<IState['usuario']>([]);

  useEffect(() => {
    (async () => {

      const{data} = await axios.get('https://api.github.com/users/bealima')
      setUsuario([data])  
      
    })();
  }, []);

  return (
    <div className="App">
      
      <List usuario={usuario} />
    </div>
  );
}

export default App;
