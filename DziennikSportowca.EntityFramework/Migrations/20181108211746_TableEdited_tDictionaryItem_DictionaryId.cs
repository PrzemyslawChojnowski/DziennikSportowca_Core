using Microsoft.EntityFrameworkCore.Migrations;

namespace DziennikSportowca.EntityFramework.Migrations
{
    public partial class TableEdited_tDictionaryItem_DictionaryId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DictionaryItems_Dictionaries_DictionaryId",
                table: "DictionaryItems");

            migrationBuilder.AlterColumn<int>(
                name: "DictionaryId",
                table: "DictionaryItems",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_DictionaryItems_Dictionaries_DictionaryId",
                table: "DictionaryItems",
                column: "DictionaryId",
                principalTable: "Dictionaries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DictionaryItems_Dictionaries_DictionaryId",
                table: "DictionaryItems");

            migrationBuilder.AlterColumn<int>(
                name: "DictionaryId",
                table: "DictionaryItems",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_DictionaryItems_Dictionaries_DictionaryId",
                table: "DictionaryItems",
                column: "DictionaryId",
                principalTable: "Dictionaries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
