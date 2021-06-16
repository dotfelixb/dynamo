using FluentValidation;

namespace Dynamo.Features.Employee.GetEmployee
{
    public class GetEmployeeValidator : AbstractValidator<GetEmployeeCommand>
    {
        public GetEmployeeValidator()
        {
            RuleFor(r => r.Id).NotNull();
        }
    }
}