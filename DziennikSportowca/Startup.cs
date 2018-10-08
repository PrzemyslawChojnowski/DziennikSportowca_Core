using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using AutoMapper;
using DziennikSportowca.EntityFramework.Data;

namespace DziennikSportowca
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            //DbContext
            services.AddDbContext<ApplicationDbContext>();

            //Services
            //services.AddScoped<ISrv, SrvImplementation>();


            //Facades
            //services.AddScoped<IFcd, FcdImplementation>();

            //Sets Cross-Origin Resource Sharing. MUST BE SET BEFORE services.AddMvc() !!!
            services.AddCors();

            services.AddMvc();

            //AutoMapper
            //Mapper.Initialize(cfg => cfg.)
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();

            //Lets to send requests from specified origin
            app.UseCors(
                options => options.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin()
            );
        }
    }
}
