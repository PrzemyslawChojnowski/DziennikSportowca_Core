using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DziennikSportowca.Commons.Models.SearchCriteria;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DziennikSportowca.Controllers.ApiControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseController : BaseController
    {
        public ExerciseController()
        {
        }

        [HttpPost("")]
        public ActionResult CreateExercise()
        {
            return Ok("Create");
        }

        [HttpGet("{id}")]
        public ActionResult GetExercise(int id)
        {
            return Ok(new { Id = id, Name = "Ćwiczenie 1", ActivitType = "Aktywność 1" });
        }

        [HttpPut("")]
        public ActionResult UpdateExercise()
        {
            return Ok("Update");
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteExercise(int id)
        {
            return Ok("Delete");
        }

        [HttpPost("list")]
        public ActionResult GetExerciseList(ExerciseSearchCriteria criteria)
        {
            List<dynamic> list = new List<dynamic>();
            list.Add(new { Id = 1, ExerciseName = "Exercise 1", ActivityType = "Activity 1" });
            list.Add(new { Id = 2, ExerciseName = "Exercise 2", ActivityType = "Activity 2" });
            list.Add(new { Id = 3, ExerciseName = "Exercise 3", ActivityType = "Activity 3" });
            list.Add(new { Id = 4, ExerciseName = "Exercise 4", ActivityType = "Activity 4" });
            list.Add(new { Id = 5, ExerciseName = "Exercise 5", ActivityType = "Activity 5" });
            list.Add(new { Id = 6, ExerciseName = "Exercise 6", ActivityType = "Activity 6" });

            return Ok(new { SearchCriteria = criteria, Exercises = list });
        }
    }
}