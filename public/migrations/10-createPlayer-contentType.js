module.exports = function(migration) {
    const playerContentType = migration
        .createContentType("playerContent")
        .name("playerContent")
        .description("player bio")
        .displayField("fullName");

    const fullName = playerContentType
        .createField("fullName")
        .name("FullName")
        .type("Symbol")
        .required(true);

    const age = playerContentType
        .createField("age")
        .name("Age")
        .type("Number");

    const about = playerContentType
        .createField("about")
        .name("About")
        .type("Text");

    const personalPhoto = playerContentType
        .createField("photo")
        .name("Photo")
        .type("Link")
        .linkType("Asset");

}