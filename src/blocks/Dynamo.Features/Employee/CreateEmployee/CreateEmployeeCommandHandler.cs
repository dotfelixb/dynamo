using FluentResults;
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

        public CreateEmployeeCommandHandler(Contracts.Employee.EmployeeClient client)
        {
            _client = client;
        }

        public async Task<Result<CreateEmployeeResult>> Handle(
            CreateEmployeeCommand request, 
            CancellationToken cancellationToken)
        {
            try
            {
                var createable = new Contracts.CreateEmployeeRequest
                {
                    FirstName = request.FirstName
                };
                var rst = await _client
                        .CreateEmployeeAsync(createable, cancellationToken: cancellationToken);

                return Result.Ok(new CreateEmployeeResult { Id = rst.Id });
            }
            catch (Exception ex)
            {
                return Result.Fail(ex.Message);
            }
        }
    }
}