using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataLock.Migrations
{
    /// <inheritdoc />
    public partial class RecreateCredentialIdAsGuid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Credential",
                table: "Credential");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Credential");

            migrationBuilder.AddColumn<Guid>(
                name: "CredentialId",
                table: "Credential",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Credential",
                table: "Credential",
                column: "CredentialId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Credential",
                table: "Credential");

            migrationBuilder.DropColumn(
                name: "CredentialId",
                table: "Credential");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Credential",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Credential",
                table: "Credential",
                column: "Id");
        }
    }
}
