
module.exports = function(migration) {
    const paragraphWithImageContentType = migration
        .createContentType("paragraphWithImageContent")
        .name("paragraphWithImageContent")
        .description("Paragraph with Image")
        .displayField("title");

    const title = paragraphWithImageContentType
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);

    const text = paragraphWithImageContentType
        .createField("text")
        .name("Text")
        .type("Text")
        .required(true);

    const image = paragraphWithImageContentType
        .createField("image")
        .name("Image")
        .type("Link")
        .linkType("Asset");

}