using DziennikSportowca.Commons.Models.Dictionary;
using DziennikSportowca.Interfaces.Facades;
using DziennikSportowca.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace DziennikSportowca.Facades
{
    public class DictionaryFcd : IDictionaryFcd
    {
        private IDictionarySrv _dictionarySrv;

        public DictionaryFcd(IDictionarySrv dictionarySrv)
        {
            _dictionarySrv = dictionarySrv;
        }

        public int CreateDictionaryItem(DictionaryItem dictionaryItem)
        {
            return _dictionarySrv.CreateDictionaryItem(dictionaryItem);
        }

        public int DeleteDictionaryItem(int id)
        {
            return _dictionarySrv.DeleteDictionaryItem(id);
        }

        public IList<Dictionary> GetDictionaries()
        {
            return _dictionarySrv.GetDictionaries();
        }

        public IList<DictionaryItem> GetDictionary(int id)
        {
            return _dictionarySrv.GetDictionary(id);
        }

        public DictionaryItem GetDictionaryItem(int id)
        {
            return _dictionarySrv.GetDictionaryItem(id);
        }

        public DictionaryItem UpdateDictionaryItem(DictionaryItem dictionaryItem)
        {
            return _dictionarySrv.UpdateDictionaryItem(dictionaryItem);
        }
    }
}
