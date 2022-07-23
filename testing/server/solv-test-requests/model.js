const TestData = function (id) {
    this.title = `object_${id}_title`,
    this.field1 = `object_${id}_field_1`,
    this.field2 = `object_${id}_field_2`,
    this.field3 = `object_${id}_field_3`
}

module.exports.generateTestData = (id) => {
    if (!id) {
        return new TestData('default')
    }
    return new TestData(id)
}