using AutoMapper;
using Dynamo.Contracts;
using Dynamo.Features.Employee.Event.CreateEmployee;
using Dynamo.Features.Employee.Event.CreateEmployeeContact;
using Grpc.Core;
using MassTransit;
using MediatR;
using System;
using System.Threading.Tasks;

namespace Dynamo.Server.EmployeeServices
{
    public class EmployeeService : Employee.EmployeeBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;

        public EmployeeService(
            IMediator mediator,
            IMapper mapper)
        {
            _mapper = mapper;
            _mediator = mediator;
        }

        public override async Task<EmployeeCreatedReply> CreateEmployee(
            CreateEmployeeRequest request,
            ServerCallContext context)
        {
            try
            {
                var createable = _mapper
                  .Map<CreateEmployeeRequest, CreateEmployeeEvent>(request);

                createable.Id = NewId.NextGuid().ToString();

                var rst = await _mediator.Send(createable);

                if (rst.IsFailed)
                {
                    throw new InvalidOperationException("Not able to create employee");
                }

                return new EmployeeCreatedReply
                {
                    EmployeeId = createable.Id
                };
            }
            catch (Exception)
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
                var createable = _mapper.Map<CreateEmployeeContactRequest, CreateEmployeeContactEvent>(request);

                var rst = await _mediator.Send(createable);

                if (rst.IsFailed)
                {
                    throw new InvalidOperationException("Not able to create employee contact");
                }

                return new EmployeeContactCreatedReply { };
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}