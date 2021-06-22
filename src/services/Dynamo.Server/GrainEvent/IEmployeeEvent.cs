using Dynamo.Models.EmployeeEventModel;

namespace Dynamo.Server.GrainEvent
{
    public interface IEmployeeEvent
    {
    }
    public class CreateEmployeeEvent 
        : CreateEmployeeEventModel, 
        IEmployeeEvent
    { }

    public class CreateEmployeeContactEvent 
        : CreateEmployeeContactEventModel, 
        IEmployeeEvent
    { }
}
