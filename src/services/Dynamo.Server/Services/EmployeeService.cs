using AutoMapper;
using Dynamo.Contracts;
using Dynamo.Models.EmployeeEventModel;
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
        private readonly IMapper _mapper;

        public EmployeeService(
            IClusterClient clusterClient, 
            IMapper mapper)
        {
            _clusterClient = clusterClient;
            _mapper = mapper;
        }

        public override async Task<EmployeeCreatedReply> CreateEmployee(
            CreateEmployeeRequest request,
            ServerCallContext context)
        {
            try
            {
                var createable = _mapper
                  .Map<CreateEmployeeRequest, CreateEmployeeEventModel>(request);

                createable.Id = NewId.NextGuid().ToString();

                var grain = _clusterClient.GetGrain<IEmployeeGrain>(createable.Id);
                var rst = await grain.CreateEmployee(createable);

                if (!rst)
                {
                    throw new InvalidOperationException("Not able to create new employee");
                }

                return new EmployeeCreatedReply
                {
                    EmployeeId = createable.Id
                };
            }
            catch (Exception ex)
            {
                throw;
            }
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

        public override async Task<EmployeeContactCreatedReply> CreateEmployeeContact(CreateEmployeeContactRequest request, ServerCallContext context)
        {
            try
            {
                var createable = _mapper
                .Map<CreateEmployeeContactRequest, CreateEmployeeContactEventModel>(request);

                var grain = _clusterClient.GetGrain<IEmployeeGrain>(createable.EmployeeId);
                var rst = await grain.CreateEmployeeContact(createable);

                if (!rst)
                {
                    throw new InvalidOperationException("Not able to create employee contact");
                }

                return new EmployeeContactCreatedReply { };
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}