using DataLock.Db;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<CredentialDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DataLockDatabase"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "api",
    pattern: "api/{controller}/{action?}/{id?}");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action?}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();