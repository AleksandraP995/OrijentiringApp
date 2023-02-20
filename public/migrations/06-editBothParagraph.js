module.exports = function(migration) {
    const paragraph = migration.editContentType("paragraphContent");
    paragraph.deleteField("text");
}

module.exports = function(migration) {
    const textWithImage = migration.editContentType("paragraphWithImageContent");
    textWithImage.deleteField("text")
}

module.exports = function(migration) {
    const paragraph = migration.editContentType("paragraphContent");
    paragraph.createField("textField").type("Text").name("Description");
}

module.exports = function(migration) {
    const paragraphWithImage = migration.editContentType("paragraphWithImageContent");
    paragraphWithImage.createField("textField").type("Text").name("Description");
}