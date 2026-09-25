type HevyWorkout = {

  page: number
  page_count: number
  volume: number
  workouts: Array<{
    id: string
    title: string
    routine_id?: string
    description: string
    start_time: string
    end_time: string
    updated_at: string
    created_at: string
    duration: number
    exercises: Array<{
      index: number
      title: string
      notes: string
      exercise_template_id: string
      superset_id: any
      sets: Array<{
        index: number
        type: string
        weight_kg?: number
        reps?: number
        distance_meters?: number
        duration_seconds?: number
        rpe: any
        custom_metric: any
      }>
    }>
  }>
};