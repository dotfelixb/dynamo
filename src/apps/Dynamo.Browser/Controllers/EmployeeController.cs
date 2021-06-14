using Dynamo.Features.Employee.CreateEmployee;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Dynamo.Browser.Controllers
{
    public class EmployeeController : MethodController
    {
        private readonly IMediator _mediator;

        public EmployeeController(
            IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("employee.create", Name = nameof(CreateEmployeeAsync))]
        public async Task<IActionResult> CreateEmployeeAsync()
        {
            var command = new CreateEmployeeCommand { FirstName = "Test" };
            var rst = await _mediator.Send(command);

            return Ok(rst);
        }
    }
}