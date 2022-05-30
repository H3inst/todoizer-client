import EmptySvg from '../../../assets/dashboard/empty.svg';

function EmptyState() {

  const render = () => {
    return (
      <div className="flex-1 flex flex-column justify-center align-center">
        <img src={EmptySvg} alt="Empty" className="Image" width="400" />
        <h1 className="mt-20">
          Select a project or a team or create them quickly
        </h1>
        <div className="flex mt-20">
          <button className="Button Button__Primary mr-10">
            Create a project
          </button>
        </div>
      </div>
    );
  };

  return render();
}

export default EmptyState;
