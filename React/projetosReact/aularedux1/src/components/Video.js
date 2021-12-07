import { connect } from "react-redux"; 

const Video=({activeLesson, activeModule})=>{
  return(
    <div>
      <strong>Módulo: {activeModule.title}</strong>
      <br />
      <span>Aula: {activeLesson.title}</span>
    </div>
  );
}

export default connect(state=> ({
  activeModule: state.videoReducer.activeModule,
  activeLesson: state.videoReducer.activeLesson
})) (Video);
