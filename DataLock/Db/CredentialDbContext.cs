using DataLock.Models;
using Microsoft.EntityFrameworkCore;

namespace DataLock.Db
{
    public class CredentialDbContext : DbContext
    {
        public DbSet<Credential> Credential { get; set; }

        public CredentialDbContext(DbContextOptions<CredentialDbContext> context) : base(context)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Credential>().HasKey(k => k.CredentialId);
            modelBuilder.Entity<Credential>().Property(p => p.CredentialId).ValueGeneratedOnAdd();
        }
    }
}
