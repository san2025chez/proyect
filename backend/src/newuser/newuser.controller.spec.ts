import { Test, TestingModule } from '@nestjs/testing';
import { NewuserController } from './newuser.controller';

describe('NewuserController', () => {
  let controller: NewuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewuserController],
    }).compile();

    controller = module.get<NewuserController>(NewuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
