import './config/env.js'; // ← PRIMERO, SIN ASIGNAR

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import assetRoutes from './routes/assetRoutes.js';
import workOrderRoutes from './routes/workOrderRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/work-orders', workOrderRoutes);

app.get('/', (req, res) => {
  res.send('API Secure Services Platform funcionando');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

