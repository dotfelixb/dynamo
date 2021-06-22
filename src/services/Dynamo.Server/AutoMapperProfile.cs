using AutoMapper;
using Dynamo.Contracts;
using Dynamo.Features.Employee.Event.CreateEmployee;
using Dynamo.Features.Employee.Event.CreateEmployeeContact;

namespace Dynamo.Server
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            #region create employee mapping

            CreateMap<CreateEmployeeRequest, CreateEmployeeEvent>()
                .ForMember(d => d.DateOfBirth, o => o.MapFrom(s => s.DateOfBirth.ToDateTimeOffset()))
                .ForMember(d => d.DateOfJoining, o => o.MapFrom(s => s.DateOfJoining.ToDateTimeOffset()));

            #endregion


            #region create employee contact mapping

            CreateMap<CreateEmployeeContactRequest, CreateEmployeeContactEvent>();

            #endregion
        }
    }
}
