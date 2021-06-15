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

        [HttpPost("employee.create", Name = nameof(CreateEmployee))]
        public async Task<IActionResult> CreateEmployee([FromBody] CreateEmployeeCommand command)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest();
            //}

            var rst = await _mediator.Send(command);

            return Ok(rst);
        }
    }
}