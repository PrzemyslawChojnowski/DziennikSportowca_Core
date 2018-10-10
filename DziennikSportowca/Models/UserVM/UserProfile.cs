using AutoMapper;
using DziennikSportowca.Commons.Models.User;

namespace DziennikSportowca.Models.UserVM
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserVM, User>();
            CreateMap<User, UserVM>();
        }
    }
}