import app from '../../index';
import request from 'supertest';

describe('PUT /task/days_passed/:_id', () => {
  it('It should return the days elapsed since the task was created', async () => {
    const taskData = {
      title: 'NEW TASK',
      description: 'DESCRIPTION',
      status: 'COMPLETE',
      user: 'USER',
      date: new Date(),
    };
    const taskID = await request(app).post('/task').send(taskData);
    const daysPassed = await request(app).get(
      `/task/days_passed/${taskID?.body?.task?._id}`,
    );

    expect(daysPassed.status).toBe(200);
    expect(daysPassed.body.days_passed).toBe(0);
  });
});
