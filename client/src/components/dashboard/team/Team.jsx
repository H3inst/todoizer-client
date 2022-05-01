import { useParams } from 'react-router-dom';

function Team() {

  const { teamId } = useParams();

  const render = () => {
    return <h1>{teamId}</h1>;
  };

  return render();
}

export default Team;