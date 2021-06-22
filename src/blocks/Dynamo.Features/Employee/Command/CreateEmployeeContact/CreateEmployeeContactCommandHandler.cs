using AutoMapper;
using Dynamo.Contracts;
using Dynamo.Models.Employee;
using FluentResults;
using FluentValidation;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Dynamo.Features.Employee.Command.CreateEmployeeContact
{
    public class CreateEmployeeContactCommand : 
        CreateEmployeeContactModel,
        IRequest<Result<CreateEmployeeContactResult>>
    {

    }

    public class CreateEmployeeContactResult
    {
        public string ContactId { get; set; }
        public string EmployeeId { get; set; }
    }

    public class CreateEmployeeContactValidator : AbstractValidator<CreateEmployeeContactCommand>
    {
        public CreateEmployeeContactValidator()
        {
            RuleFor(r => r.Name).NotEmpty().MaximumLength(50);
            RuleFor(r => r.Address).NotEmpty().MaximumLength(150);
        }
    }

    public class CreateEmployeeContactCommandHandler :
        IRequestHandler<CreateEmployeeContactCommand,
            Result<CreateEmployeeContactResult>>
    {
        private readonly Contracts.Employee.EmployeeClient _client;
        private readonly IMapper _mapper;

        public CreateEmployeeContactCommandHandler(
            Contracts.Employee.EmployeeClient client, 
            IMapper mapper)
        {
            _client = client;
            _mapper = mapper;
        }

        public async Task<Result<CreateEmployeeContactResult>> Handle(
            CreateEmployeeContactCommand request, 
            CancellationToken cancellationToken)
        {
            try
            {
                var createable = _mapper
                    .Map<CreateEmployeeContactCommand, CreateEmployeeContactRequest>(request);

                var rst = await _client.CreateEmployeeContactAsync(
                    createable, 
                    cancellationToken: cancellationToken);

                var createdEmployeeContact = new CreateEmployeeContactResult
                {
                    EmployeeId = rst.EmployeeId,
                    ContactId = rst.ContactId
                };

                return Result.Ok(createdEmployeeContact);
            }
            catch (Exception ex)
            {
                return Result.Fail(ex.Message);
            }
        }
    }
}
