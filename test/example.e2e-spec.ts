import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '~/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('GET /example', () => {
    it('should return a list of examples', async () => {
      //prepare
      await request(app.getHttpServer())
        .post('/example')
        .send({ name: 'test' });

      //assert
      return request(app.getHttpServer())
        .get('/example')
        .expect(200)

        .expect(({ body }) => {
          expect(body).toBeInstanceOf(Array);
          (body as object[]).forEach((object) => {
            expect(object).toStrictEqual({
              id: expect.any(Number),
              name: expect.any(String),
            });
          });
        });
    });
  });

  describe('POST /example', () => {
    it('should return created example', () => {
      return request(app.getHttpServer())
        .post('/example')
        .send({ name: 'test' })
        .expect(201)
        .expect(({ body }) => {
          expect(body).toStrictEqual({
            id: expect.any(Number),
            name: 'test',
          });
        });
    });
  });
});
