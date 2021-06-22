using Dynamo.Models.Employee;

namespace Dynamo.Models.EmployeeEventModel
{
    public class CreateEmployeeEventModel : CreateEmployeeModel
    {
        public string Id { get; set; }
    }

    public class CreateEmployeeContactEventModel : CreateEmployeeContactModel
    {

        public string ContactId { get; set; }
    }
}
