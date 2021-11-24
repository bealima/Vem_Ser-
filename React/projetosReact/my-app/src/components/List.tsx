import React from 'react';
import styles from '../components/List.module.css'
import { AiFillGithub } from 'react-icons/ai';
import {MdHomeWork} from 'react-icons/md';
import {ImLocation} from 'react-icons/im';
import {MdEmail} from 'react-icons/md';

interface IProps {
  usuario: {
    id: number,    
    avatar_url: string,
    html_url: string,
    name: string,
    company: string,
    location: string,
    email: string,
    hireable: string,
    bio: string,
    public_repos: number,

   
  }[]
}


const List: React.FC<IProps> = ({usuario}) => {
  return(
    <div>
    {usuario.map((e, index) => (
      <div key={index} className={styles.list}>  
        <h1>{e.name}</h1>   
        <div className={styles.boxDados}>
          <img src={e.avatar_url} alt="" />
          <div className={styles.dados}>
            <p><MdEmail/>E-mail: anabeatriz.ethos@gmail.com</p>
            <p><ImLocation/>{e.location}</p>
            <p><MdHomeWork/>Trabalho atual: <a href="https://www.dbccompany.com.br/">{e.company}</a></p>
            <a href={e.html_url}><AiFillGithub/>Meu GitHub </a>
          </div>
        </div>
        <span>{e.bio}</span>
      </div>
    ))}    
  </div>
  );
}
  

export default List;