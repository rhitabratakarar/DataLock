using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//Add services to the container.
builder.Services.AddControllersWithViews();

// for connection string
// https://stackoverflow.com/questions/68980778/config-connection-string-in-net-core-6
// https://learn.microsoft.com/en-us/ef/core/miscellaneous/connection-strings

//builder.Services.AddDbContext<YourContext>(options =>
//{
//    options.UseSqlServer(builder.Configuration.GetConnectionString("DataLockDatabase"));

//});

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
    name: "default",
    pattern: "api/{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();