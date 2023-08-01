using DataLock.Models;
using DataLockAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.Configure<DataLockDatabaseSettings>(
    builder.Configuration.GetSection("CredentialManagerDatabase"));

builder.Services.AddSingleton<CredentialService>();


var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

// app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();