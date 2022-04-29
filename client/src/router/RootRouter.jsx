import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '../constants/routes';

import Access from '../components/access/Access';
import Login from '../components/access/login/Login';
import Register from '../components/access/register/Register';


function RootRouter() {

  const render = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/* Access */}
          <Route path={routes.access} element={<Access />}>
            <Route index element={<Login />} />
            <Route path={routes.accessLogin} element={<Login />} />
            <Route path={routes.accessRegister} element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  return render();
}

export default RootRouter;