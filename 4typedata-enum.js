var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
    Gender[Gender["Unknown"] = -1] = "Unknown";
})(Gender || (Gender = {}));
var jenisKelamin = Gender.Male;
console.log(jenisKelamin);
var Category;
(function (Category) {
    Category["Grocery"] = "GROCERY";
    Category["Electronic"] = "ELECTRONIC";
    Category["Handphone"] = "HANDPHONE";
})(Category || (Category = {}));
var kategory = Category.Handphone;
console.log(kategory);
