using Dynamo.Server.GrainEvent;
using System;
using System.Collections.Generic;

namespace Dynamo.Server.GrainState
{
    public class EmployeeAggregate
    {
        #region Properties

        // Employee Basic Props
        public string Id { get; set; }
        public string FirstName { get; set; }

        public string MIddleName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string Gender { get; set; }
        public DateTimeOffset DateOfBirth { get; set; }
        public DateTimeOffset DateOfJoining { get; set; } = DateTimeOffset.UtcNow;
        public string Status { get; set; } = "Active";
        public string EmploymentType { get; set; } = "Full-time";

        // Employee Contact Props
        public ICollection<EmployeeContact> Contacts { get; set; } = new List<EmployeeContact>();

        #endregion Properties

        #region Events

        public EmployeeAggregate Apply(CreateEmployeeEvent @event)
        {
            Id = @event.Id;
            FirstName = @event.FirstName;
            MIddleName = @event.MIddleName;
            LastName = @event.LastName;
            Title = @event.Title;
            Gender = @event.Gender;
            DateOfBirth = @event.DateOfBirth;
            DateOfJoining = @event.DateOfJoining;
            Status = @event.Status;
            EmploymentType = @event.EmploymentType;

            return this;
        }

        public EmployeeAggregate Apply(CreateEmployeeContactEvent @event)
        {
            var contact = new EmployeeContact
            {
                Id = @event.ContactId,
                Name = @event.Name,
                Mobile = @event.Mobile,
                Phone= @event.Phone,
                Address= @event.Address,
                CompanyEmail= @event.CompanyEmail,
                PersonalEmail= @event.PersonalEmail,
                ContactType= @event.ContactType,
                Relation= @event.Relation,
                SendEmail= @event.SendEmail,
                SendSMS= @event.SendSMS
            };

            Contacts.Add(contact);

            return this;
        }

        #endregion Events
    }

    public class EmployeeContact
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Phone{ get; set; }
        public string Address { get; set; }
        public string CompanyEmail { get; set; }
        public string PersonalEmail { get; set; }
        public string ContactType { get; set; }
        public string Relation { get; set; }
        public bool SendEmail { get; set; }
        public bool SendSMS { get; set; }
    }
}
