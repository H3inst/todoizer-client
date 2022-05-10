import { Add, Close } from 'grommet-icons';
import { useParams } from 'react-router-dom';

function Project() {

  const { projectId } = useParams();

  const render = () => {
    return (
      <div className="Main-Layout">
        <h1 className="Title-Text">{projectId}</h1>
        <div className="Main-Layout__Todo-List">
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>

          <div className="Textfield-With-Icon__No-Bg mt-10 w-100">
            <Add />
            <input
              className="w-100"
              type="text"
              name="user_email"
              placeholder="Add a new Todo"
            />
          </div>
        </div>
      </div>
    );
  }

  return render();
}

export default Project;