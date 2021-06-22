using Dynamo.Contracts;
using Dynamo.Server.GrainImpl;
using Grpc.Core;
using MassTransit;
using Orleans;
using System;
using System.Threading.Tasks;

namespace Dynamo.Server.EmployeeServices
{
    public class EmployeeService : Employee.EmployeeBase
    {
        private readonly IClusterClient _clusterClient;

        public EmployeeService(IClusterClient clusterClient)
        {
            _clusterClient = clusterClient;
        }

        public override async Task<EmployeeCreatedReply> CreateEmployee(
            CreateEmployeeRequest request,
            ServerCallContext context)
        {
            var newEmployee = new CreateEmployeeEventModel 
            {
                Id = NewId.Next().ToString(),
                FirstName = request.FirstName,
                MIddleName = request.MiddleName,
                LastName = request.LastName,
                Title = request.Title,
                Gender  =request.Gender,
                DateOfBirth = request.DateOfBirth.ToDateTimeOffset(),
                DateOfJoining = request.DateOfJoining.ToDateTimeOffset(),
                Status = request.Status,
                EmploymentType = request.EmploymentType
            };

            var grain = _clusterClient.GetGrain<IEmployeeGrain>(newEmployee.Id);
            var rst = await grain.CreateEmployee(newEmployee);

            if (!rst)
            {
                throw new InvalidOperationException("Not able to create new employee");
            }

            return new EmployeeCreatedReply
            {
                EmployeeId = newEmployee.Id
            };
        }

        public override Task<EmployeeReply> GetEmployee(
            GetEmployeeRequest request,
            ServerCallContext context)
        {
            return Task.Run(() =>
            {
                return new EmployeeReply
                {
                    Id = NewId.NextGuid().ToString(),
                    FirstName = "Lisa Mia Piage"
                };
            });
        }
    }
}