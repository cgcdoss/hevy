import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';

@Component({
  imports: [
    TableModule,
    SkeletonModule,
    DecimalPipe,
  ],
  selector: 'app-table-workouts',
  styleUrl: './table-workouts.css',
  templateUrl: './table-workouts.html',
})
export class TableWorkouts {

  public workouts = input.required();
  public isLoading = input.required();

}
