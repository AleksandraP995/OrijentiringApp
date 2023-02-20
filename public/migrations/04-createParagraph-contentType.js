module.exports = function(migration) {
    const paragraphContentType = migration
        .createContentType("paragraphContent")
        .name("paragraphContent")
        .description("basic paragraph")
        .displayField("title");

    const title = paragraphContentType
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);

    const text = paragraphContentType
        .createField("text")
        .name("Text")
        .type("Text")
        .required(true);

}