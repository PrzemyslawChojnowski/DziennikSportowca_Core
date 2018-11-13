using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.EntityFramework.Models
{
    public class tDictionary
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }

        public IList<tDictionaryItem> DictionaryItems { get; set; }
    }
}
