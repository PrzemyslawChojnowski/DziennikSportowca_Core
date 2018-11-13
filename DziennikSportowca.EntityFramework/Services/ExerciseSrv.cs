using AutoMapper;
using DziennikSportowca.Commons.Models.Exercise;
using DziennikSportowca.Commons.Models.SearchCriteria;
using DziennikSportowca.Commons.Models.SearchResult;
using DziennikSportowca.EntityFramework.Data;
using DziennikSportowca.EntityFramework.Models;
using DziennikSportowca.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Transactions;

namespace DziennikSportowca.EntityFramework.Services
{
    public class ExerciseSrv : IExerciseSrv
    {
        private ApplicationDbContext _context;
        private IMapper _mapper;

        public ExerciseSrv(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public int CreateExercise(Exercise exercise)
        {
            tExercise dbExercise = new tExercise();
            MapDomainToDb(exercise, dbExercise);

            _context.AddAsync(dbExercise);
            _context.SaveChanges();

            return dbExercise.Id;
        }

        public void DeleteExercise(int id)
        {
            var dbExercise = _context.Exercises.SingleOrDefault(x => x.Id == id);
            dbExercise.IsDeleted = true;
            _context.SaveChanges();
        }

        public Exercise GetExercise(int id)
        {
            var dbExercise = _context.Exercises.SingleOrDefault(x => x.Id == id && !x.IsDeleted);

            if (dbExercise != null)
            {
                return new Exercise()
                {
                    Id = dbExercise.Id,
                    Name = dbExercise.Name
                };
            }
            else throw new Exception("Exercise with this id does not seem to exist");
        }

        public ExerciseSearchResult GetList(ExerciseSearchCriteria criteria)
        {
            return new ExerciseSearchResult() { SearchCriteria = criteria, Exercises = _mapper.Map<IList<Exercise>>(_context.Exercises.ToList()) };
        }

        public void UpdateExercise(Exercise exercise)
        {
            tExercise dbExercise = _context.Exercises.SingleOrDefault(x => x.Id == exercise.Id && !x.IsDeleted);
            MapDomainToDb(exercise, dbExercise);
            _context.SaveChanges();
        }

        private void MapDomainToDb(Exercise exercise, tExercise dbExercise)
        {
            dbExercise.Id = exercise.Id;
            dbExercise.Name = exercise.Name;
        }
    }
}
