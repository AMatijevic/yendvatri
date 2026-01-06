var builder = DistributedApplication.CreateBuilder(args);

//[Getting Started With Keycloak Identity Provider (free Identity Server alternative) - YouTube](https://www.youtube.com/watch?v=fvxQ8bW0vO8)
//[Secure Your .NET Application With Keycloak: Step-by-Step Guide - YouTube](https://www.youtube.com/watch?v=Blrn5JyAl6E)

//[The Simplest Way to Add Keycloak Authentication to Your .NET API - YouTube](https://www.youtube.com/watch?v=HAvCoQ0tOTs)
var keycloak = builder.AddKeycloak("keycloak", port: 8080)
  .WithDataVolume()
  .WithExternalHttpEndpoints();

var server = builder.AddProject<Projects.yendvatri_Server>("server")
    .WithHttpHealthCheck("/health")
    .WithExternalHttpEndpoints()
    .WithReference(keycloak);

var webfrontend = builder.AddViteApp("webfrontend", "../frontend")
    .WithReference(server)
    .WaitFor(server);

server.PublishWithContainerFiles(webfrontend, "wwwroot");

await builder.Build().RunAsync();
