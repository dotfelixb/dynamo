using System;

namespace Dynamo.Models.Employee
{
   public class CreateEmployeeModel
    {
        public string FirstName { get; set; }
        public string MIddleName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; } = "";
        public string Gender { get; set; }
        public DateTimeOffset DateOfBirth { get; set; }
        public DateTimeOffset DateOfJoining { get; set; } = DateTimeOffset.UtcNow;
        public string Status { get; set; } = "Active";
        public string EmploymentType { get; set; } = "Full-time";

    }

    public class CreateEmployeeContactModel
    {
        public string EmployeeId { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; } = "";
        public string Phone { get; set; } = "";
        public string Address { get; set; } = "";
        public string CompanyEmail { get; set; } = "";
        public string PersonalEmail { get; set; } = "";
        public string ContactType { get; set; } = "";
        public string Relation { get; set; } = "";
        public bool SendEmail { get; set; }
        public bool SendSMS { get; set; }
    }
}
