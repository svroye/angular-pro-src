import { FoodStoreModule } from './food-store.module';

describe('FoodStoreModule', () => {
  let foodStoreModule: FoodStoreModule;

  beforeEach(() => {
    foodStoreModule = new FoodStoreModule();
  });

  it('should create an instance', () => {
    expect(foodStoreModule).toBeTruthy();
  });
});
