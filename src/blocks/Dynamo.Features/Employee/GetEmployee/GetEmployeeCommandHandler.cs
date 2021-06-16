using FluentResults;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Dynamo.Features.Employee.GetEmployee
{
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
                    Id = request.Id
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