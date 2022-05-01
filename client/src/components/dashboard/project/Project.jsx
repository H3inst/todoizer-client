import { useParams } from 'react-router-dom';

function Project() {

  const { projectId } = useParams();

  const render = () => {
    return <h1>{projectId}</h1>
  }

  return render();
}

export default Project;