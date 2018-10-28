using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.Commons.Models.SearchCriteria
{
    public class SearchCriteriaCore
    {
        public int PageSize { get; set; }
        public int CurrentPage { get; set; }
        public string SortColumn { get; set; }
        public string SortDirection { get; set; }
    }
}
