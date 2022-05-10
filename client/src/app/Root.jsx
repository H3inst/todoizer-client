import { Provider as StoreProvider } from 'react-redux';

import RootRouter from '../router/RootRouter';
import { store } from '../config/store';

function Root() {
  return (
    <StoreProvider store={store}>
      <RootRouter />
    </StoreProvider>
  );
}

export default Root;

