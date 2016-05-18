import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ClientAppComponent } from '../app/client.component';

beforeEachProviders(() => [ClientAppComponent]);

describe('App: Client', () => {
  it('should create the app',
      inject([ClientAppComponent], (app: ClientAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'client works!\'',
      inject([ClientAppComponent], (app: ClientAppComponent) => {
    expect(app.title).toEqual('client works!');
  }));
});
