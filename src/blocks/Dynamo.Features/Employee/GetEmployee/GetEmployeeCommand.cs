using FluentResults;
using MediatR;

namespace Dynamo.Features.Employee.GetEmployee
{
    public class GetEmployeeCommand : IRequest<Result<GetEmployeeResult>>
    {
        public string Id { get; set; }
    }
}