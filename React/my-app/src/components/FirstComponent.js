import SencondComponent from "./SecondComponent";

function FirstComponent(props) {

  return(
    <div> 
      <h1>Meu Primeiro Componente</h1>
      <p>Testando outra coisa</p>
      <SencondComponent name = {props.name}/>
      <div>
          <p>jsfjshbjdgv</p>
      </div>
    </div>
    
  );
}
export default FirstComponent;