import { Document, model, Schema } from 'mongoose';
import { ITask } from './interface';

const taskSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Projects',
    require: true,
  },
  unitId: {
    type: Schema.Types.ObjectId,
    ref: 'Docs',
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tags: [
    {
      type: String,
      require: true,
    },
  ],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Accounts',
      require: true,
    },
  ],
  deadline: Date,
  status: {
    type: Schema.Types.ObjectId,
    ref: 'TaskStatus',
  },
});

const taskModel = model<ITask & Document>('Tasks', taskSchema);

export default taskModel;
