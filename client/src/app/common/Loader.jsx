import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

function Loader() {
  const loaderId = document.getElementById('loader');
  const isLoading = useSelector(state => state.interface.isLoading);

  console.log(isLoading);
  const render = () => {
    return (
      <Fragment>
        {isLoading && (
          <div className="Loader-Wrapper">
            Loading...
          </div>
        )}
      </Fragment>
    );
  }

  return createPortal(render(), loaderId);
}

export default Loader;