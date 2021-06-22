using FluentResults;
using FluentValidation;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Dynamo.Features.Employee.Command.GetEmployee
{
    public class GetEmployeeCommand : IRequest<Result<GetEmployeeResult>>
    {
        public string Id { get; set; }
    }

    public class GetEmployeeResult
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string Gender { get; set; }
        public DateTimeOffset DateOfBirth { get; set; }
        public string Title { get; set; }
        public string Status { get; set; }
        public string EmploymentType { get; set; }
        public DateTimeOffset DateOfJoining { get; set; }
    }

    public class GetEmployeeValidator : AbstractValidator<GetEmployeeCommand>
    {
        public GetEmployeeValidator()
        {
            RuleFor(r => r.Id).NotNull();
        }
    }

    internal class GetEmployeeCommandHandler :
        IRequestHandler<GetEmployeeCommand,
            Result<GetEmployeeResult>>
    {
        private readonly Contracts.Employee.EmployeeClient _client;

        public GetEmployeeCommandHandler(Contracts.Employee.EmployeeClient client)
        {
            _client = client;
        }

        public async Task<Result<GetEmployeeResult>> Handle(
            GetEmployeeCommand request,
            CancellationToken cancellationToken)
        {
            try
            {
                var getable = new Contracts.GetEmployeeRequest
                {
                    EmployeeId = request.Id
                };

                var rst = await _client
                    .GetEmployeeAsync(getable, cancellationToken: cancellationToken);

                var gotEmployee = new GetEmployeeResult
                {
                    Id = rst.Id,
                    FirstName = rst.FirstName
                };

                return Result.Ok(gotEmployee);
            }
            catch (Exception ex)
            {
                return Result.Fail(ex.Message);
            }
        }
    }
}