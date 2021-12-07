const INITIAL_STATE={
  activeLesson:{},
  activeModule:{},
  modules:[
    {id:1, title:'Inciando com React', lessons:[
    {id:1, title: 'Primeira Aula'},
    {id:2, title: 'segunda Aula'}
    ]},
    {id:2, title:'Inciando com Redux', lessons:[
      {id:3, title: 'Primeira Aula'},
      {id:4, title: 'segunda Aula'}
    ]},
  ]
}

const videoReducer=(state = INITIAL_STATE, action) => {
  if (action.type === 'SET_LESSON'){
    return{
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    }
  }
  return(
    state
  );
}

export default videoReducer;