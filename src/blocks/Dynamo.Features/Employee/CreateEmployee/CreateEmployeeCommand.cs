using Dynamo.Models.Employee;
using FluentResults;
using MediatR;

namespace Dynamo.Features.Employee.CreateEmployee
{
    public class CreateEmployeeCommand :
        CreateEmployeeModel,
        IRequest<Result<CreateEmployeeResult>>
    { }
}