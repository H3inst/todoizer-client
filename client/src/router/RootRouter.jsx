import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '../constants/routes';

import Access from '../components/access/Access';
import Login from '../components/access/login/Login';
import Dashboard from '../components/dashboard/Dashboard';


function RootRouter() {

  const render = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/* Access */}
          <Route path={routes.access} element={<Access />}>
            <Route index element={<Login />} />
            <Route path={routes.accessLogin} element={<Login />} />
          </Route>

          <Route path={routes.dashboard} element={<Dashboard />}>

          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  return render();
}

export default RootRouter;