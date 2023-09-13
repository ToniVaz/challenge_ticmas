import app from '../../index';
import request from 'supertest';

describe('POST /task', () => {
  it('should create a task. Only supports string', async () => {
    const taskData = {
      title: 'NEW TASK',
      description: 'DESCRIPTION',
      status: 'COMPLETE',
      user: 'USER',
    };
    const createResponse = await request(app).post('/task').send(taskData);
    expect(createResponse.status).toBe(200);
    expect(createResponse.body?.task?.title).toBe('NEW TASK');
    expect(createResponse.body?.task?.description).toBe('DESCRIPTION');
    expect(createResponse.body?.task?.status).toBe('COMPLETE');
    expect(createResponse.body?.task?.user).toBe('USER');
  });

  it('check if you try to create an empty document with incorrect fields', async () => {
    const task = {
      title: '',
      description: '',
      status: '',
      user: 3,
    };
    const createResponse = await request(app).post('/task').send(task);
    expect(createResponse.status).toBe(500);
    
  });
});
