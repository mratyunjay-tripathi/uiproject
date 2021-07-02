

function Form(props) {
  return (
      <div>
          <h1 on onClick={()=>props.history.push('/ui/home/')}>hello</h1>
      </div>
  );
}

export default Form;
