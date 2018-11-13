using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.Commons.Models.Dictionary
{
    public class DictionaryItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int DictionaryId { get; set; }
        public bool IsDeleted { get; set; }
        public Dictionary Dictionary { get; set; }
    }
}
