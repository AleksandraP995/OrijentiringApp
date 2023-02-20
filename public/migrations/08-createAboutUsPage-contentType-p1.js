module.exports = function(migration) {
    const aboutUsPage = migration
        .createContentType("aboutUsPage")
        .name("aboutUs Page")
        .displayField("title");

    const title = aboutUsPage
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);

    const slug = aboutUsPage
        .createField("slug")
        .name("Slug")
        .type("Symbol")
        .required(true);


    const heroImageRef = aboutUsPage
        .createField("heroImageRef")
        .name("HeroImageRef")
        .type("Array")
        .items({
            type: "Link",
            linkType: "Entry",
            validations: [{ linkContentType: ["heroImageContent"] }],
        });
}