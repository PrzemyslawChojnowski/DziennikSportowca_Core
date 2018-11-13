using DziennikSportowca.Commons.Models.Dictionary;
using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.Interfaces.Services
{
    public interface IDictionarySrv
    {
        DictionaryItem GetDictionaryItem(int id);
        int CreateDictionaryItem(DictionaryItem dictionaryItem);
        DictionaryItem UpdateDictionaryItem(DictionaryItem dictionaryItem);
        int DeleteDictionaryItem(int id);

        IList<DictionaryItem> GetDictionary(int id);
        IList<Dictionary> GetDictionaries();

    }
}
