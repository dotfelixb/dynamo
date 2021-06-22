using AutoMapper;
using Dynamo.Contracts;
using Dynamo.Models.Employee;
using FluentResults;
using FluentValidation;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Dynamo.Features.Employee.Command.CreateEmployee
{
    public class CreateEmployeeCommand :
        CreateEmployeeModel,
        IRequest<Result<CreateEmployeeResult>>
    { }

    public class CreateEmployeeResult
    {
        public string Id { get; set; }
    }

    public class CreateEmployeeValidator : AbstractValidator<CreateEmployeeCommand>
    {
        public CreateEmployeeValidator()
        {
            RuleFor(r => r.FirstName).NotEmpty().MaximumLength(50);

            RuleFor(r => r.LastName).NotEmpty().MaximumLength(50);

            RuleFor(r => r.Gender).NotEmpty();

            RuleFor(r => r.DateOfBirth)
                .NotEqual(DateTimeOffset.MinValue)
                .NotNull();
        }
    }

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
                var createable = _mapper
                    .Map<CreateEmployeeCommand, CreateEmployeeRequest>(request);

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