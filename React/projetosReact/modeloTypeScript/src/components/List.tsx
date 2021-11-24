import React from 'react';

interface IProps {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}


const List: React.FC<IProps> = ({people}) => {
  return(
  <div>
    {people.map((person, index) => (
      <div key={index}>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <img src={person.url} alt={person.name} />
      </div>
    ))}    
  </div>)
}

export default List;