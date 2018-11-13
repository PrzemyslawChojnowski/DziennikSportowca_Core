using AutoMapper;
using DziennikSportowca.Commons.Models.Exercise;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DziennikSportowca.Models.ExerciseVM
{
    public class ExerciseProfile : Profile
    {
        public ExerciseProfile()
        {
            CreateMap<ExerciseVM, Exercise>();
            CreateMap<Exercise, ExerciseVM>();
        }
    }
}
