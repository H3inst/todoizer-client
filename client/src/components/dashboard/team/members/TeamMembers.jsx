import { useSelector } from 'react-redux';

function TeamMembers() {
  const team = useSelector(state => state.team.team);

  const render = () => {
    return (
      <div className="Main-Layout">
        <h1 className="Title-Text">
          {team.team_name} / Members
        </h1>
      </div>
    );
  };

  return render();
}

export default TeamMembers;