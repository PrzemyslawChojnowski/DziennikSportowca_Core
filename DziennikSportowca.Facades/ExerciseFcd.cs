using DziennikSportowca.Commons.Models.Exercise;
using DziennikSportowca.Commons.Models.SearchCriteria;
using DziennikSportowca.Commons.Models.SearchResult;
using DziennikSportowca.Interfaces.Facades;
using DziennikSportowca.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.Facades
{
    public class ExerciseFcd : IExerciseFcd
    {
        private IExerciseSrv _exerciseSrv;

        public ExerciseFcd(IExerciseSrv exerciseSrv)
        {
            _exerciseSrv = exerciseSrv;
        }

        public int CreateExercise(Exercise exercise)
        {
            return _exerciseSrv.CreateExercise(exercise);
        }

        public void DeleteExercise(int id)
        {
            _exerciseSrv.DeleteExercise(id);
        }

        public Exercise GetExercise(int id)
        {
            return _exerciseSrv.GetExercise(id);
        }

        public ExerciseSearchResult GetList(ExerciseSearchCriteria criteria)
        {
            return _exerciseSrv.GetList(criteria);
        }

        public void UpdateExercise(Exercise exercise)
        {
            _exerciseSrv.UpdateExercise(exercise);
        }
    }
}
