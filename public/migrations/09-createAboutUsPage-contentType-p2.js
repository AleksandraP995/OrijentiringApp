module.exports = function(migration) {
    const aboutUsPage = migration.editContentType("aboutUsPage");
    aboutUsPage
        .createField("basicParagraphRef")
        .name("basicParagraphRef")
        .type("Array")
        .items({
            type: "Link",
            linkType: "Entry",
            validations: [{ linkContentType: ["paragraphContent"] }],
        });

    aboutUsPage
        .createField("paragraphWithImageRef")
        .name("paragraphWithImageRef")
        .type("Array")
        .items({
            type: "Link",
            linkType: "Entry",
            validations: [{ linkContentType: ["paragraphWithImageContent"] }],
        });
}