import { Provider as StoreProvider } from 'react-redux';
import { ToastContainer, Slide } from 'react-toastify';

import RootRouter from '../router/RootRouter';
import { store } from '../config/store';

function Root() {
  return (
    <StoreProvider store={store}>
      <RootRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        className="Parraf-Text"
        transition={Slide}
        closeOnClick
        pauseOnHover
      />
    </StoreProvider>
  );
}

export default Root;

