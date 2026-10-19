import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiKeyTutorial } from './api-key-tutorial';

describe('ApiKeyTutorial', () => {
  let component: ApiKeyTutorial;
  let fixture: ComponentFixture<ApiKeyTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiKeyTutorial],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiKeyTutorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
