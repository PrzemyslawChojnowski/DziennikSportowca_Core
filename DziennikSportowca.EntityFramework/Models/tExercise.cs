﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.EntityFramework.Models
{
    public class tExercise
    {
        public tExercise()
        {
        }
        
        public int Id { get; set; }
        
        public string Name { get; set; }

        public bool IsDeleted { get; set; }
    }
}
