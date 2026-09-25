import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { map, tap } from 'rxjs';
import { Http } from '../../core/services/http';
import { loadingIcon } from '@primeuix/themes/aura/datatable';

@Component({
  imports: [
    AsyncPipe,
    FormsModule,
    InputTextModule,
    SkeletonModule,
    AccordionModule,
    CardModule,
    DatePipe,
    DecimalPipe,
  ],
  selector: 'app-workout-list',
  styleUrl: './workout-list.css',
  templateUrl: './workout-list.html',
})
export class WorkoutList implements AfterViewInit {

  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly _httpService = inject(Http);
  private readonly _messageService = inject(MessageService);
  private readonly _router = inject(Router);

  public totalPerPage = 10;
  public currentPage = 1;
  public totalPages?: number[];
  public workouts$?: typeof this._workouts$;
  public hasApiKey = computed(() => !!this._httpService.apiKey());
  public isLoading = signal(false);

  constructor() {
    effect(() => {
      if (this.hasApiKey()) {
        this.currentPage = 1;
        this.workouts$ = this._workouts$;
      }
    });
  }

  public ngAfterViewInit(): void {
    this.workouts$ = this._workouts$;
    this._cdr.detectChanges();
  }

  public goToPage(page: number): void {
    // Verifica se o usuário pode interagir com as setas para navegar entre páginas
    if (page > (this.totalPages?.length || 1) || page < 1 || page === this.currentPage) {
      return;
    }

    this.currentPage = page;
    this.workouts$ = this._workouts$;
  }

  public goToDetail(workoutId: string): void {
    if (!workoutId) {
      this._messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'ID do treino em branco.',
      });
      return;
    }

    this._router.navigate(['/workout', workoutId]);
  }

  private get _workouts$() {
    if (!this._httpService.apiKey()) {
      this._messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'A chave de API não foi fornecida. Por favor, insira uma chave de API válida.',
      });
      return;
    }

    this.isLoading.set(true);
    this._cdr.detectChanges();

    return this._httpService.get<HevyWorkout>(
      `https://api.hevyapp.com/v1/workouts`,
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': this._httpService.apiKey(),
        },
        params: {
          page: this.currentPage,
          pageSize: this.totalPerPage,
        },
      },
    ).pipe(
      tap(response => console.log(response)),
      tap(() => {
        this.isLoading.set(false);
        this._cdr.detectChanges();
      }),
      tap((resp) => this.totalPages = Array(resp.page_count)
        .fill(resp.page_count)
        .map((x, i) => i + 1)
      ),
      map(response => ({
        ...response,
        workouts: response.workouts.map(workout => ({
          ...workout,
          duration: {
            hours: Math.round(((new Date(workout.end_time).getTime() - new Date(workout.start_time).getTime())) / (1000 * 60 * 60)),
            minutes: Math.round(((new Date(workout.end_time).getTime() - new Date(workout.start_time).getTime())) / (1000 * 60)) % 60,
          },
          volume: workout.exercises.reduce((exerciseVolume, exercise) => {
            return exerciseVolume + exercise.sets.reduce((setVolume, set) => {
              return setVolume + (set.weight_kg ?? 0) * (set.reps ?? 0);
            }, 0);
          }, 0)
        })),
      })),
    );
  }

}
