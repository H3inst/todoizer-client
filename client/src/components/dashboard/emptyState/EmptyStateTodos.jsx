import EmptyTodos from '../../../assets/dashboard/empty_todos.svg';

function EmptyStateTodos() {

  const render = () => {
    return (
      <div className="text-center" style={{
        position: 'absolute',
        top: '25%',
        right: '0',
        left: '0'
      }}
      >
        <img src={EmptyTodos} width={250} alt="Empty todos" />
        <h1 className="mt-10">You don't have todos. Start typing one above.</h1>
      </div>
    );
  };

  return render();
}

export default EmptyStateTodos;