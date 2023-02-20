module.exports = function(migration) {
    const productSectionTwo = migration
        .createContentType("productSectionTwo")
        .name("Product Section Two")
        .description("One more product")
        .displayField("title");

    const internalName = productSectionTwo
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol")

    const title = productSectionTwo
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);

    const products = productSectionTwo
        .createField("products")
        .name("Products")
        .type("Array")
        .items({
            type: "Link",
            linkType: "Entry",
            validations: [{linkContentType: ["product"]}]
        })
}