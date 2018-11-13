using DziennikSportowca.Commons.Models.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.Commons.Models.SearchResult
{
    public class ExerciseSearchResult
    {
        public ExerciseSearchCriteria SearchCriteria { get; set; }
        public IList<Exercise.Exercise> Exercises { get; set; }
    }
}
