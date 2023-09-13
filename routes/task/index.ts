import {
  type Request,
  type Response,
  type NextFunction,
  Router,
} from 'express';

import {
  createTask,
  getListTask,
  getTask,
  updateTask,
  deleteTask,
  getTaskForStatus,
  getDaysPassed,
} from '../../controllers/task';

export const router = Router();

router.post('/task', (req: Request, res: Response, next: NextFunction) => {
  void createTask(req, res);
});
router.get('/task', (req: Request, res: Response, next: NextFunction) => {
  void getListTask(req, res);
});

router.get('/task/:_id', (req: Request, res: Response, next: NextFunction) => {
  void getTask(req, res);
});

router.put('/task/:_id', (req: Request, res: Response, next: NextFunction) => {
  void updateTask(req, res);
});

router.delete(
  '/task/:_id',
  (req: Request, res: Response, next: NextFunction) => {
    void deleteTask(req, res);
  },
);

router.get(
  '/task/filter/:status',
  (req: Request, res: Response, next: NextFunction) => {
    void getTaskForStatus(req, res);
  },
);

router.get(
  '/task/days_passed/:_id',
  (req: Request, res: Response, next: NextFunction) => {
    void getDaysPassed(req, res);
  },
);
