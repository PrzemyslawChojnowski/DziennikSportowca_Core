using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    }
}