using FluentResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Linq;
using System.Threading.Tasks;

namespace Dynamo.Browser.Crosscutting.Validation
{
    public class ValidationFilter : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(
            ActionExecutingContext context, 
            ActionExecutionDelegate next)
        {
            if (!context.ModelState.IsValid)
            {
                var errorReasons = context.ModelState
                    .SelectMany(m=> m.Value.Errors)
                    .Select(e=> e.ErrorMessage);

                var result = Result
                    .Fail(errorMessage: "Invalid Model")
                    .WithErrors(errorReasons);

                context.Result = new BadRequestObjectResult(result); 
                return;
            }

            await next();
        }
    }
}
