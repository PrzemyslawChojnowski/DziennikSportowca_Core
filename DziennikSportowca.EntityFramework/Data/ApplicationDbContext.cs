using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;
using DziennikSportowca.Helpers.Helpers;
using System.IO;

namespace DziennikSportowca.EntityFramework.Data
{
    public class ApplicationDbContext : DbContext
    {
        private readonly static string appSettingsPath = "E:\\Development\\Repos\\DziennikSportowca\\DziennikSportowca.EntityFramework\\appsettings.json";

        public ApplicationDbContext(DbContextOptions options) : base(GetOptions(JSONHelpers.ReadJsonStringFromPathFile(appSettingsPath, "DefaultConnection")))
        {
        }

        private static DbContextOptions GetOptions(string connectionString)
        {
            return SqlServerDbContextOptionsExtensions.UseSqlServer(new DbContextOptionsBuilder(), connectionString).Options;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
