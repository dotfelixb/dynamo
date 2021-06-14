using FluentResults;
using MediatR;

namespace Dynamo.Features.Employee.CreateEmployee
{
    public class CreateEmployeeCommand : IRequest<Result<EmployeeCreatedResult>>
    {
        public string FirstName { get; set; }
    }
}