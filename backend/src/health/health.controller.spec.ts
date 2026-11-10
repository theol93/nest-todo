import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { HealthController } from './health.controller';
import { PrismaService } from '../prisma/prisma.service';
describe('health HTTP endpoints', () => {
  let app: INestApplication;
  const query = jest.fn();
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [{ provide: PrismaService, useValue: { $queryRaw: query } }],
    }).compile();
    app = module.createNestApplication();
    await app.init();
  });
  afterAll(() => app.close());
  it('responds to liveness without accessing the database', async () => {
    await request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect({ data: { status: 'ok' } });
    expect(query).not.toHaveBeenCalled();
  });
  it('reports database readiness', async () => {
    query.mockResolvedValueOnce([{ '?column?': 1 }]);
    await request(app.getHttpServer()).get('/health/ready').expect(200);
  });
  it('returns 503 without leaking database details', async () => {
    query.mockRejectedValueOnce(new Error('secret connection details'));
    const response = await request(app.getHttpServer())
      .get('/health/ready')
      .expect(503);
    expect(response.body.message).toBe('Database is unavailable');
  });
});
