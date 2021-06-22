using AutoMapper;
using FluentResults;
using Google.Protobuf.WellKnownTypes;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Dynamo.Features.Employee.CreateEmployee
{
    internal class CreateEmployeeCommandHandler :
        IRequestHandler<CreateEmployeeCommand,
            Result<CreateEmployeeResult>>
    {
        private readonly Contracts.Employee.EmployeeClient _client; 
        private readonly IMapper _mapper;

        public CreateEmployeeCommandHandler(
            Contracts.Employee.EmployeeClient client, 
            IMapper mapper)
        {
            _client = client;
            _mapper = mapper;
        }

        public async Task<Result<CreateEmployeeResult>> Handle(
            CreateEmployeeCommand request,
            CancellationToken cancellationToken)
        {
            try
            {
                var createable = _mapper.Map<CreateEmployeeCommand, Contracts.CreateEmployeeRequest>(request);

                var rst = await _client.CreateEmployeeAsync(
                    createable, 
                    cancellationToken: cancellationToken);

                var createdEmployee = new CreateEmployeeResult
                {
                    Id = rst.EmployeeId
                };

                return Result.Ok(createdEmployee);
            }
            catch (Exception ex)
            {
                return Result.Fail(ex.Message);
            }
        }
    }
}