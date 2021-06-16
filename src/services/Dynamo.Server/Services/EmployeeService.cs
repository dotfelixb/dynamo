using Dynamo.Contracts;
using Grpc.Core;
using MassTransit;
using System.Threading.Tasks;

namespace Dynamo.Server.EmployeeServices
{
    public class EmployeeService : Employee.EmployeeBase
    {
        public override Task<EmployeeCreatedReply> CreateEmployee(
            CreateEmployeeRequest request,
            ServerCallContext context)
        {
            return Task.Run(() =>
            {
                return new EmployeeCreatedReply
                {
                    Id = NewId.Next().ToString()
                };
            });
        }

        public override Task<EmployeeReply> GetEmployee(
            GetEmployeeRequest request,
            ServerCallContext context)
        {
            return Task.Run(() =>
            {
                return new EmployeeReply
                {
                    Id = NewId.NextGuid().ToString(),
                    FirstName = "Lisa Mia Piage"
                };
            });
        }
    }
}