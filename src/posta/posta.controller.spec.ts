import { Test, TestingModule } from '@nestjs/testing';
import { RutaController } from './posta.controller';

describe('PostaController', () => {
  let controller: RutaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RutaController],
    }).compile();

    controller = module.get<RutaController>(RutaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
