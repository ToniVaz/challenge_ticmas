import app from '../../index';
import request from 'supertest';

describe('PUT /task/:_id', () => {
  it('should update task', async () => {
    const taskData = {
      title: 'NEW TASK',
      description: 'DESCRIPTION',
      status: 'COMPLETE',
      user: 'USER',
    };
    const taskID = await request(app).post('/task').send(taskData);
    const putTask = await request(app)
      .put(`/task/${taskID?.body?.task?._id}`)
      .send({
        title: 'NEW TASK PUT',
        description: 'DESCRIPTION PUT',
        status: 'COMPLETE PUT',
        user: 'USER PUT',
      });

    expect(putTask.status).toBe(200);
    expect(putTask.body?.task?.title).toBe('NEW TASK PUT');
    expect(putTask.body?.task?.description).toBe('DESCRIPTION PUT');
    expect(putTask.body?.task?.status).toBe('COMPLETE PUT');
    expect(putTask.body?.task?.user).toBe('USER PUT');
  });
});
