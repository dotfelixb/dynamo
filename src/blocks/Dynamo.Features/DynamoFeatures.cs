
using AutoMapper;
using Dynamo.Contracts;
using Dynamo.Features.Employee.CreateEmployee;
using Dynamo.Features.Employee.CreateEmployeeContact;
using Google.Protobuf.WellKnownTypes;

namespace Dynamo.Features
{
   public class DynamoFeatures : Profile
    {
        public DynamoFeatures()
        {
            CreateMap<CreateEmployeeCommand, CreateEmployeeRequest>()
                .ForMember(d => d.DateOfBirth, o => o.MapFrom(s=> Timestamp.FromDateTimeOffset(s.DateOfBirth)))
                .ForMember(d => d.DateOfJoining, o => o.MapFrom(s=> Timestamp.FromDateTimeOffset(s.DateOfJoining)));

            CreateMap<CreateEmployeeContactCommand, CreateEmployeeContactRequest>()
                .ForAllMembers(o=> o.Condition(s => s!=null));
        }
    }
}
