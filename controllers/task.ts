import { type ITask, Task } from '../models/task';
import { type Request, type Response } from 'express';

const valueResults = (task: any): boolean => {
  function isDate(value: any): value is Date {
    return value instanceof Date;
  }

  const values = Object.values(task).every(
    value => (typeof value === 'string' && value !== '') || isDate(value),
  );

  return values;
};

export const createTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { title, description, status, user, date = undefined } = req?.body;

  // eslint-disable-next-line no-extra-boolean-cast
  const customDate = Boolean(date) ? new Date(date) : new Date();

  const payload: ITask = {
    title,
    description,
    user,
    status,
    date: customDate,
  };
  try {
    if (!valueResults(payload)) {
      res.status(500).json({ message: 'Error al crear la tarea' });
    } else {
      const newTask = new Task(payload);

      const task = await newTask.save();
      res.json({ task });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tarea' });
  }
};

export const getListTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const task = await Task.find();
    res.json({ task });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la lista de tareas' });
  }
};

export const getTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await Task.findById(req?.params?._id);
    res.json({ task });
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener la tarea por ID',
    });
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { title, description, status, user } = req?.body;
  try {
    const updatedData = {
      title,
      description,
      status,
      user,
    };

    await Task.updateOne({ _id: req?.params?._id }, updatedData);
    await getTask(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la tarea' });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { _id } = req?.params;
  try {
    const task = await Task.findByIdAndDelete(_id);
    res.send(task);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tarea' });
  }
};

export const getTaskForStatus = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { status } = req?.params;

  try {
    const task = await Task.find({ status });
    res.send(task);
  } catch (error) {
    res.status(500).json({ message: 'Error al filtrar por STATUS la tarea' });
  }
};

export const getDaysPassed = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { _id } = req?.params;

  const task = await Task.findById(_id);

  if (task?.date != null) {
    const currentDay = new Date();
    const dateReceived = task?.date;

    const timeDifference = currentDay.getTime() - dateReceived.getTime();

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    res.json({ days_passed: daysDifference });
  } else {
    res
      .status(500)
      .json({ message: 'Error al recibir los dias transcurridos' });
  }
};
