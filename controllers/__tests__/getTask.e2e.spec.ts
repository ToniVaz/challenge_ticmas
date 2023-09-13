import app from '../../index';
import request from 'supertest';

describe('GET /task', () => {
  it('should return all tasks', async () => {
    const getTask = await request(app).get('/task');
    expect(getTask.status).toBe(200);
  });
});

describe('GET /task/:_id', () => {
  it('should return task by id', async () => {
    const taskData = {
      title: 'NEW TASK',
      description: 'DESCRIPTION',
      status: 'COMPLETE',
      user: 'USER',
    };
    const createTask = await request(app).post('/task').send(taskData);
    const getTask = await request(app).get(
      `/task/${createTask?.body?.task?._id}`,
    );

    expect(getTask.status).toBe(200);
    expect(getTask.body?.task?.title).toBe('NEW TASK');
    expect(getTask.body?.task?.description).toBe('DESCRIPTION');
    expect(getTask.body?.task?.status).toBe('COMPLETE');
    expect(getTask.body?.task?.user).toBe('USER');
  });
});

describe('GET /task/filter/:status', () => {
  it('should return task by status', async () => {
    const taskData = {
      title: 'NEW TASK',
      description: 'DESCRIPTION',
      status: 'COMPLETE',
      user: 'USER',
    };
    const createTask = await request(app).post('/task').send(taskData);
    const getTask = await request(app).get(
      `/task/filter/${createTask?.body?.task?.status}`,
    );
    expect(getTask.status).toBe(200);
    expect(getTask.body[0]?.status).toBe('COMPLETE');
  });
});

// describe('GET /tasks/:id/dias-transcurridos', () => {
//   it('should return task by status', async () => {
//     const taskData = {
//       title: 'NEW TASK',
//       description: 'DESCRIPTION',
//       status: 'COMPLETE',
//       user: 'USER',
//     };
//     const createTask = await request(app).post('/task').send(taskData);
//     const getTask = await request(app).get(
//       `/task/${createTask?.body?.task?._id}/dias-transcurridos`,
//     );
//     expect(getTask.status).toBe(200);
//     expect(getTask.body?.task).toBe('2 DIAS');
//   });
// });
