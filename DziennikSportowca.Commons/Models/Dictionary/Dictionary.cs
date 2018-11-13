using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.Commons.Models.Dictionary
{
    public class Dictionary
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<DictionaryItem> DictionaryItems { get; set; }
    }
}
