using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project1.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedRoleModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RoleType",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RoleType",
                table: "Users");
        }
    }
}
