import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableWorkouts } from './table-workouts';

describe('TableWorkouts', () => {
  let component: TableWorkouts;
  let fixture: ComponentFixture<TableWorkouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWorkouts],
    }).compileComponents();

    fixture = TestBed.createComponent(TableWorkouts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
