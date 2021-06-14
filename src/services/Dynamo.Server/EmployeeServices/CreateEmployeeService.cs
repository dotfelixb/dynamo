using Dynamo.Contracts;
using Grpc.Core;
using MassTransit;
using System;
using System.Threading.Tasks;

namespace Dynamo.Server.EmployeeServices
{
    public class CreateEmployeeService : Employee.EmployeeBase
    {
        public override Task<EmployeeCreatedReply> CreateEmployee(
            CreateEmployeeRequest request,
            ServerCallContext context)
        {
            return Task.Run(() =>
            {
                return new EmployeeCreatedReply { Id = NewId.Next().ToString() };
            });
        }
    }
}