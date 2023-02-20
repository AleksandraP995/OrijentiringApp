
module.exports = function(migration) {
    const heroImageContentType = migration
        .createContentType("heroImageContent")
        .name("heroImageContent")
        .description("entry point of the page")
        .displayField("title");

    const title = heroImageContentType
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);

    const heroImage = heroImageContentType
        .createField("heroImage")
        .name("Hero Image")
        .type("Link")
        .linkType("Asset");

}