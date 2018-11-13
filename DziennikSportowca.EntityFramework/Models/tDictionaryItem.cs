using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.EntityFramework.Models
{
    public class tDictionaryItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }

        public int DictionaryId { get; set; }
        public tDictionary Dictionary { get; set; }
    }
}
