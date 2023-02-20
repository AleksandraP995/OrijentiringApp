module.exports = function(migration) {
    const aboutUsPage = migration.editContentType("aboutUsPage");
    aboutUsPage
        .createField("playersRef")
        .name("playersRef")
        .type("Array")
        .items({
            type: "Link",
            linkType: "Entry",
            validations: [{ linkContentType: ["playerContent"] }],
        });

    }