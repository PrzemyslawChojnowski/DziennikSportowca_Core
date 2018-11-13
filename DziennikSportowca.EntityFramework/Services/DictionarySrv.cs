using AutoMapper;
using DziennikSportowca.Commons.Models.Dictionary;
using DziennikSportowca.EntityFramework.Data;
using DziennikSportowca.EntityFramework.Models;
using DziennikSportowca.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DziennikSportowca.EntityFramework.Services
{
    public class DictionarySrv : IDictionarySrv
    {
        private ApplicationDbContext _context;
        private IMapper _mapper;

        public DictionarySrv(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public int CreateDictionaryItem(DictionaryItem dictionaryItem)
        {
            tDictionaryItem dbDictionaryItem = new tDictionaryItem();
            MapDomainToDb(dictionaryItem, dbDictionaryItem);

            _context.AddAsync(dbDictionaryItem);
            _context.SaveChanges();

            return dbDictionaryItem.Id;
        }

        public int DeleteDictionaryItem(int id)
        {
            var dbDictionaryItem = _context.DictionaryItems.SingleOrDefault(x => x.Id == id);
            dbDictionaryItem.IsDeleted = true;
            _context.SaveChanges();

            return dbDictionaryItem.Id;
        }

        public IList<Dictionary> GetDictionaries()
        {
            return _mapper.Map<IList<Dictionary>>(_context.Dictionaries.ToList());
        }

        public IList<DictionaryItem> GetDictionary(int id)
        {
            return _mapper.Map<IList<DictionaryItem>>(_context.DictionaryItems.Where(x => x.DictionaryId == id).ToList());
        }

        public DictionaryItem GetDictionaryItem(int id)
        {
            return _mapper.Map<DictionaryItem>(_context.DictionaryItems.SingleOrDefault(x => x.Id == id));
        }

        public DictionaryItem UpdateDictionaryItem(DictionaryItem dictionaryItem)
        {
            tDictionaryItem dbDictionaryItem = _context.DictionaryItems.SingleOrDefault(x => x.Id == dictionaryItem.Id && !x.IsDeleted);
            MapDomainToDb(dictionaryItem, dbDictionaryItem);
            _context.SaveChanges();

            return _mapper.Map<DictionaryItem>(dbDictionaryItem);
        }

        private void MapDomainToDb(DictionaryItem dictionaryItem, tDictionaryItem dbDictionaryItem)
        {
            dbDictionaryItem.DictionaryId = dictionaryItem.DictionaryId;
            dbDictionaryItem.IsDeleted = dictionaryItem.IsDeleted;
            dbDictionaryItem.Name = dictionaryItem.Name;
        }
    }
}
