import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '../../core/services/http';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  imports: [
    AsyncPipe,
    JsonPipe,
  ],
  selector: 'app-workout-detail',
  styleUrl: './workout-detail.css',
  templateUrl: './workout-detail.html',
})
export class WorkoutDetail {

  private readonly _route = inject(ActivatedRoute);
  private readonly _httpService = inject(Http);

  public workoutId = this._route.snapshot.paramMap.get('id');

  public workout$ = this._httpService.get<HevyWorkout>(
    `https://api.hevyapp.com/v1/workouts/${this.workoutId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'api-key': this._httpService.apiKey(),
      },
    },
  )

}
