using Dynamo.Models.Employee;
using Orleans;
using Orleans.EventSourcing;
using Orleans.Providers;
using System;
using System.Threading.Tasks;

namespace Dynamo.Server.GrainImpl
{
    public interface IEmployeeGrain : IGrainWithStringKey
    {
        Task<bool> CreateEmployee(CreateEmployeeEventModel @event);
    }

    public class CreateEmployeeEventModel : CreateEmployeeModel
    {
        public string Id { get; set; }
    }

    [StorageProvider(ProviderName = "Redis")]
    public class EmployeeGrain : JournaledGrain<EmployeeState>, IEmployeeGrain
    {
        public async Task<bool> CreateEmployee(CreateEmployeeEventModel model)
        {
            var @event = new CreateEmployeeEvent
            {
                Id = model.Id,
                FirstName = model.FirstName,
                MIddleName = model.MIddleName,
                LastName = model.LastName,
                Title = model.Title,
                Gender = model.Gender,
                DateOfBirth = model.DateOfBirth,
                DateOfJoining = model.DateOfJoining,
                Status = model.Status,
                EmploymentType = model.EmploymentType
            };

            RaiseEvent(@event);
            await ConfirmEvents();

            return true;
        }
    }

    public interface IEmployeeEvent
    {
    }

    public class CreateEmployeeEvent : CreateEmployeeEventModel, IEmployeeEvent
    { }

    public class EmployeeState
    {
        #region Properties

        // Create Employee Props
        public string FirstName { get; set; }

        public string MIddleName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string Gender { get; set; }
        public DateTimeOffset DateOfBirth { get; set; }
        public DateTimeOffset DateOfJoining { get; set; } = DateTimeOffset.UtcNow;
        public string Status { get; set; } = "Active";
        public string EmploymentType { get; set; } = "Full-time";

        #endregion Properties

        #region Events

        public EmployeeState Apply(CreateEmployeeEvent @event)
        {
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

        #endregion Events
    }
}
