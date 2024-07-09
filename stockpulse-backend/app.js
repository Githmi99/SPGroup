const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const componentRoutes = require('./routes/components');
const purchaseRoutes = require('./routes/purchaseRoutes');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');  // Add this line

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/purchases', purchaseRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/components', componentRoutes);
app.use('/api/auth', authRoutes);  // Add this line
app.use('/api/admin', require('./routes/admin')); // Add admin routes

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
