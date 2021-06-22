using System;

namespace Dynamo.Features.Employee.GetEmployee
{
    public class GetEmployeeResult
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string Gender { get; set; }
        public DateTimeOffset  DateOfBirth { get; set; }
        public string Title { get; set; }
        public string Status { get; set; }
        public string EmploymentType { get; set; }
        public DateTimeOffset DateOfJoining { get; set; }
    }
}
