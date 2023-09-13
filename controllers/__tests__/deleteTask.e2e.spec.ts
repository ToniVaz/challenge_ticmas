import app from '../../index';
import request from 'supertest';

describe('DELETE /task/:_id', () => {
  it('should delete task', async () => {
    const taskData = {
      title: 'NEW TASK',
      description: 'DESCRIPTION',
      status: 'COMPLETE',
      user: 'USER',
    };
    const taskID = await request(app).post('/task').send(taskData);
    const getTaskDelete = await request(app).delete(
      `/task/${taskID?.body?.task?._id}`,
    );

    expect(getTaskDelete.status).toBe(200);
  });
});
