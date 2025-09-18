export function UserGreeting({props}) {
  return (
    <>
      <h1>Nome: {props.firstName}</h1>
      <h2>Apelido: {props.lastName}</h2>
    </>    
  );
}


