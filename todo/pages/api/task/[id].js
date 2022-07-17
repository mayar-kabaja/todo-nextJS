import dbConnect from '../../../database/dbConnect';
import toDoSchema from '../../../database/models/toDoSchema';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method,
      } = req;
      switch (method) {
        case "GET":
            try {
              const task = await toDoSchema.findById(id);
              if (!task) res.status(400).json({ success: false });
      
              res.status(200).json({ success: true, data: task });
            } catch (error) {
              res.status(400).json({ success: false });
            }
            break;
        case "PUT":
            try {
              const task = await toDoSchema.findByIdAndUpdate(id, { isDone : true }, {
                new: true,
                runValidators: true,
              });
              if (!task) res.status(400).json({ success: false });
      
              res.status(200).json({ success: true, data: task });
            } catch (error) {
              res.status(400).json({ success: false });
            }
            break;
            case "DELETE":
                try {
                  const task = await toDoSchema.deleteOne({ _id: id });
                  if (!task) res.status(400).json({ success: false });
          
                  res.status(200).json({ success: true, data: {} });
                } catch (error) {
                  res.status(400).json({ success: false });
                }
                break;
              default:
                res.status(400).json({ success: false });
                break;
      }
}