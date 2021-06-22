using Dynamo.Features.Employee.CreateEmployee;
using Dynamo.Features.Employee.GetEmployee;
using Dynamo.Features.Employee.ListEmployee;
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

        [HttpGet("employee.get", Name = nameof(GetEmployee))]
        public async Task<IActionResult> GetEmployee([FromQuery] GetEmployeeCommand command)
        {
            var rst = await _mediator.Send(command);

            if (rst.IsFailed)
            {
                return BadRequest(rst);
            }

            return Ok(rst);
        }

         [HttpGet("employee.list", Name = nameof(ListEmployee))]
        public async Task<IActionResult> ListEmployee([FromQuery] ListEmployeeCommand command)
        {
            var rst = await _mediator.Send(command);

            if (rst.IsFailed)
            {
                return BadRequest(rst);
            }

            return Ok(rst);
        }

        [HttpPost("employee.create", Name = nameof(CreateEmployee))]
        public async Task<IActionResult> CreateEmployee(
            [FromBody] CreateEmployeeCommand command)
        {
            var rst = await _mediator.Send(command);

            if (rst.IsFailed)
            {
                return BadRequest(rst);
            }

            return CreatedAtAction(nameof(GetEmployee), new { rst.Value.Id }, rst);
        }
    }
}