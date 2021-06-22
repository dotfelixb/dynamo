using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Orleans.Configuration;
using Orleans.Hosting;
using Orleans;

namespace Dynamo.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        // For instructions on how to configure Kestrel and gRPC clients on macOS,
        // visit https://go.microsoft.com/fwlink/?linkid=2099682
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
            .UseOrleans(silo =>
            {
                silo.UseLocalhostClustering()
                .Configure<ClusterOptions>(clusterOptions =>
                {
                    clusterOptions.ServiceId = "DynamoOrleansSrv1";
                    clusterOptions.ClusterId = "DynamoOrleansClstr";
                })
                .ConfigureApplicationParts(p => 
                    p.AddApplicationPart(typeof(Startup).Assembly)
                    .WithReferences())
                .AddRedisGrainStorage("Redis", ob => ob.Configure(opt =>
                {
                    opt.ConnectionString = "localhost:6379"; // This is the deafult
                    opt.UseJson = true;
                    opt.DatabaseNumber = 0;
                }));
            })
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.ConfigureKestrel(options =>
                {
                    // Setup a HTTP/2 endpoint without TLS.
                    // options.ListenLocalhost(6001, o => o.Protocols = HttpProtocols.Http2);
                });
                webBuilder.UseStartup<Startup>();
            });
    }
}