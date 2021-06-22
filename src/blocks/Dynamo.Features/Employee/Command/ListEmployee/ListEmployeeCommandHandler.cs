using FluentResults;
using MediatR;

namespace Dynamo.Features.Employee.Command.ListEmployee
{

    public class ListEmployeeCommand : 
        IRequest<Result<ListEmployeeResult>>
    {
    }

    //internal class ListEmployeeCommandHandler : 
    //    IRequestHandler<ListEmployeeCommand, 
    //        Result<ListEmployeeResult>>
    //{
    //}

    public class ListEmployeeResult {
        
    }
}