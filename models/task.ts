import { Schema, model } from 'mongoose';
type StatusType = 'pending' | 'in_process' | 'complete';

export interface ITask {
  title: string;
  description: string;
  status: StatusType;
  user: string;
  date: Date;
}

const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Task = model<ITask>('Task', taskSchema);
