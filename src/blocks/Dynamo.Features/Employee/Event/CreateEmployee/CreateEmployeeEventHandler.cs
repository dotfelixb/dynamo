using Dynamo.Models.Employee;
using FluentResults;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Dynamo.Features.Employee.Event.CreateEmployee
{
  public  class CreateEmployeeEvent : 
        CreateEmployeeModel, 
        IRequest<Result<EmployeeCreatedResult>>
    {
        public string Id { get; set; }
    }

    public class EmployeeCreatedResult
    {
        public string EmployeeId { get; set; }
    }

    public class CreateEmployeeEventHandler :
        IRequestHandler<CreateEmployeeEvent, Result<EmployeeCreatedResult>>
    {
        public Task<Result<EmployeeCreatedResult>> Handle(CreateEmployeeEvent request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
