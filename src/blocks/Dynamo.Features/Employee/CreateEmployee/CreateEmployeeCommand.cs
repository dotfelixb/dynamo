using FluentResults;
using MediatR;
using System;

namespace Dynamo.Features.Employee.CreateEmployee
{
    public class CreateEmployeeCommand : IRequest<Result<CreateEmployeeResult>>
    {
        public string FirstName { get; set; }
        public string MIddleName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string Gender { get; set; }
        public DateTimeOffset DateOfBirth { get; set; }
        public DateTimeOffset DateOfJoining { get; set; } = DateTimeOffset.UtcNow;
        public string Status { get; set; } = "Active";
        public string EmploymentType { get; set; } = "Full-time";
    }
}