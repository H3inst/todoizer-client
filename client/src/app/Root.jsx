import { Provider as StoreProvider } from 'react-redux';

import RootRouter from '../router/RootRouter';
import { store } from '../config/store';
import { ToastContainer } from 'react-toastify';

function Root() {
  return (
    <StoreProvider store={store}>
      <RootRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </StoreProvider>
  );
}

export default Root;

