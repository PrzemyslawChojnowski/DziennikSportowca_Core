using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DziennikSportowca.Commons.Models.Exercise;
using DziennikSportowca.Commons.Models.SearchCriteria;
using DziennikSportowca.Interfaces.Facades;
using DziennikSportowca.Models.ExerciseVM;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DziennikSportowca.Controllers.ApiControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseController : BaseController
    {
        private IExerciseFcd _exerciseFcd;
        private IMapper _mapper;

        public ExerciseController(
            IExerciseFcd exerciseFcd, 
            IMapper mapper)
        {
            _exerciseFcd = exerciseFcd;
            _mapper = mapper;
        }

        [HttpPost("")]
        public ActionResult CreateExercise(ExerciseVM model)
        {
            return Ok(_exerciseFcd.CreateExercise(_mapper.Map < Exercise >(model)));
        }

        [HttpGet("{id}")]
        public ActionResult GetExercise(int id)
        {
            return Ok(_mapper.Map<ExerciseVM>(_exerciseFcd.GetExercise(id)));
        }

        [HttpPut("")]
        public ActionResult UpdateExercise(ExerciseVM exercise)
        {
            _exerciseFcd.UpdateExercise(_mapper.Map<Exercise>(exercise));
            return Ok(exercise.Id);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteExercise(int id)
        {
            _exerciseFcd.DeleteExercise(id);
            return Ok(id);
        }

        [HttpPost("list")]
        public ActionResult GetExerciseList(ExerciseSearchCriteria criteria)
        {
            return Ok(_exerciseFcd.GetList(criteria));
        }
    }
}