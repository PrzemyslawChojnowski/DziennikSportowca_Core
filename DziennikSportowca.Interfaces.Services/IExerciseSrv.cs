using DziennikSportowca.Commons.Models.Exercise;
using DziennikSportowca.Commons.Models.SearchCriteria;
using DziennikSportowca.Commons.Models.SearchResult;
using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.Interfaces.Services
{
    public interface IExerciseSrv
    {
        Exercise GetExercise(int id);
        void UpdateExercise(Exercise exercise);
        void DeleteExercise(int id);
        int CreateExercise(Exercise exercise);
        ExerciseSearchResult GetList(ExerciseSearchCriteria criteria);
    }
}
