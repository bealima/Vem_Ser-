import React from 'react';

interface IProps {
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
    public_repos: number//,
    // created_at?: number,
    // updated_at?: number
   
  }[]
}


const List: React.FC<IProps> = ({usuario}) => {
  return(
    <div>
    {usuario.map((e, index) => (
      <div key={index}>
        <p>{e.name}</p>
        <p>{e.id}</p>
      </div>
    ))}    
  </div>
  );
}
  

export default List;