import WorkOrder from '../models/WorkOrder.js';

export const createWorkOrder = async (req, res) => {
  try {
    const {
      title,
      description,
      client,
      asset,
      services,
      assignedTo,
      scheduledDate,
      notes,
    } = req.body;

    if (!title || !client || !asset) {
      return res.status(400).json({
        message: 'Título, cliente y sistema son obligatorios',
      });
    }

    const workOrder = await WorkOrder.create({
      title,
      description,
      client,
      asset,
      services,
      assignedTo,
      scheduledDate,
      notes,
      createdBy: req.user._id,
    });

    res.status(201).json(workOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear orden de trabajo' });
  }
};

export const getWorkOrders = async (req, res) => {
  try {
    const orders = await WorkOrder.find({
      createdBy: req.user._id,
    })
      .populate('client', 'name')
      .populate('asset', 'name status')
      .populate('services', 'name price')
      .populate('assignedTo', 'name email')
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener órdenes de trabajo' });
  }
};
