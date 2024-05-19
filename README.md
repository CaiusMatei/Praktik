# Scheduling system

## Overview

**Welcome to our scheduling system!**

This application is meant to be used by students to see their schedules and school administrators that administrate the schedules.

Students do not have accounts and only the head administrator can create, delete and update other administrator accounts.

## How to run the project

- First of all clone or download the source code.
- Navigate to `Backend2\` and run the Project1 via Visual Studio or your command line
This will start the backend and SPA Proxy.
- Ports should be `44414` for the React SPA and `7009` for the backend. You can navigate to `7009/swagger/index.html` to view the Swagger page

## Contributors

- [Ilyas Kaya](https://github.com/AkiVonAkira)
- [Morgan Lindzen](https://github.com/Lindzen-Morgan)
- [Mostafa Shubber](https://github.com/Chasacademy-mostafa-shubber)
- [Nshoan Abdlwafa](https://github.com/ChasAcademy-Nshoan-Abdlwafa)
- [Saga Andersson](https://github.com/sagansagan)

## Tech Stack

- ASP.NET
- C#
- JavaScript (React.js)
- SQL Server
- TailwindCSS

## Approach

- ASP.NET Core Web API
- Authorization with JWT-tokens
- Code first with SQL Server
- Entity Framework Core
- Repository pattern

## Code

- Controllers: Our logic is injected into the controllers and called by them. We have several different controllers that serve different purposes.
- Models: We use both model classes and data transfer objects, DTOs.
- Repository pattern: Our logic is stored primarily inside repositories that are then injected into the controllers. This makes the controllers thinner and the application easier to develop as well as maintain.