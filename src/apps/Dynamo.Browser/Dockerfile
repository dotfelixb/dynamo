#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
RUN apt-get update -yq 
RUN apt-get install curl gnupg -yq 
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["src/apps/Dynamo.Browser/Dynamo.Browser.csproj", "src/apps/Dynamo.Browser/"]
RUN dotnet restore "src/apps/Dynamo.Browser/Dynamo.Browser.csproj"
COPY . .
WORKDIR "/src/src/apps/Dynamo.Browser"
RUN dotnet build "Dynamo.Browser.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Dynamo.Browser.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Dynamo.Browser.dll"]
