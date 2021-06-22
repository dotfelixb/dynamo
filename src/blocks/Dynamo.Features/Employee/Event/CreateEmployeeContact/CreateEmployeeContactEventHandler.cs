using Dynamo.Models.Employee;
using FluentResults;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Dynamo.Features.Employee.Event.CreateEmployeeContact
{

    public class CreateEmployeeContactEvent : 
        CreateEmployeeContactModel, 
        IRequest<Result<EmployeeContactCreatedResult>>
    {
        public string Id { get; set; }
    }

    public class EmployeeContactCreatedResult
    {
        public string EmployeeId { get; set; }
        public string ContactId { get; set; }
    }

    public class CreateEmployeeContactEventHandler :
        IRequestHandler<CreateEmployeeContactEvent, Result<EmployeeContactCreatedResult>>
    {
        public Task<Result<EmployeeContactCreatedResult>> Handle(CreateEmployeeContactEvent request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
