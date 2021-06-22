using AutoMapper;
using Dynamo.Models.EmployeeEventModel;
using Dynamo.Server.GrainEvent;
using Dynamo.Server.GrainState;
using Orleans;
using Orleans.EventSourcing;
using Orleans.Providers;
using System.Threading.Tasks;

namespace Dynamo.Server.GrainImpl
{
    public interface IEmployeeGrain : IGrainWithStringKey
    {
        Task<bool> CreateEmployee(CreateEmployeeEventModel model);
        Task<bool> CreateEmployeeContact(CreateEmployeeContactEventModel model);
    }



    [StorageProvider(ProviderName = "Redis")]
    public class EmployeeGrain : 
        JournaledGrain<EmployeeAggregate>, 
        IEmployeeGrain
    {
        private readonly IMapper _mapper;

        public EmployeeGrain(IMapper mapper)
        {
            _mapper = mapper;
        }

        public async Task<bool> CreateEmployee(CreateEmployeeEventModel model)
        {
            var @event = _mapper
                .Map<CreateEmployeeEventModel, CreateEmployeeEvent>(model);

            RaiseEvent(@event);
            await ConfirmEvents();

            return true;
        }

        public async Task<bool> CreateEmployeeContact(CreateEmployeeContactEventModel model)
        {
            var @event = _mapper
                .Map<CreateEmployeeContactEventModel, CreateEmployeeContactEvent>(model);

            RaiseEvent(@event);

            await ConfirmEvents();

            return true;
        }
    }

}
