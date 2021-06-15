using FluentResults;
using FluentValidation;
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
        public DateTimeOffset DateOfJoining { get; set; }
        public string Status { get; set; }
        public string EmploymentType { get; set; }
    }

    public class CreateEmployeeValidator : AbstractValidator<CreateEmployeeCommand>
    {
        public CreateEmployeeValidator()
        {
            RuleFor(r => r.FirstName).NotEmpty().MaximumLength(50);

            RuleFor(r => r.LastName).NotEmpty().MaximumLength(50);

            RuleFor(r => r.Gender).NotEmpty();

            RuleFor(r => r.DateOfBirth).NotEqual(DateTimeOffset.MinValue);
        }
    }
}