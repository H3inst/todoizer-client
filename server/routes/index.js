const app = require('express');

const accessRoutes = require('../modules/access/routes/access.routes');
const dashboardRoutes = require('../modules/dashboard/routes/dashboard.routes');

const router = app.Router();

router.get('/', function (_req, res) {
  return res.send('APIS');
});

router.use('/access', accessRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;