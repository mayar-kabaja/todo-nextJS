import dbConnect from '../../database/dbConnect';
import toDoSchema from '../../database/models/toDoSchema';

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case 'GET':
      try {
        const todoList = await toDoSchema.find({});
        res.status(200).json({ success: true, data: todoList });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        await toDoSchema.create(body);
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
