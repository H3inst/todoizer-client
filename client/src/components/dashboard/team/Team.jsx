import { useParams } from 'react-router-dom';
import EmptyState from '../emptyState/EmptyStateProject';

function Team() {

  const { teamId } = useParams();

  const render = () => {
    return (
      <div className="Main-Layout">
        <div className="flex justify-between align-center">
          <h1 className="Title-Text">{teamId}</h1>
          <button className="Button">
            Add list
          </button>
        </div>
        <EmptyState />
      </div>
    );
  };

  return render();
}

export default Team;