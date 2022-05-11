import EmptySvg from '../../../assets/dashboard/empty.svg';

function EmptyState() {

  const render = () => {
    return (
      <div className="flex-1 flex flex-column justify-center align-center">
        <img src={EmptySvg} alt="Empty" className="Image" width="40%" />
        <h1 className="display-3 mt-20">
          Select a project or a team or create them quickly
        </h1>
      </div>
    )
  }

  return render();
}

export default EmptyState;
