using FluentValidation;
using System;

namespace Dynamo.Features.Employee.CreateEmployee
{
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