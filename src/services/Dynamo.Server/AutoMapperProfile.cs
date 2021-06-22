using AutoMapper;
using Dynamo.Contracts;
using Dynamo.Models.EmployeeEventModel;
using Dynamo.Server.GrainEvent;

namespace Dynamo.Server
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            #region create employee mapping

            CreateMap<CreateEmployeeRequest, CreateEmployeeEventModel>()
                .ForMember(d => d.DateOfBirth, o => o.MapFrom(s => s.DateOfBirth.ToDateTimeOffset()))
                .ForMember(d => d.DateOfJoining, o => o.MapFrom(s => s.DateOfJoining.ToDateTimeOffset()));
            CreateMap<CreateEmployeeEventModel, CreateEmployeeEvent>();

            #endregion


            #region create employee contact mapping

            CreateMap<CreateEmployeeContactRequest, CreateEmployeeContactEventModel>();
            CreateMap<CreateEmployeeContactEventModel, CreateEmployeeContactEvent>();

            #endregion
        }
    }
}
