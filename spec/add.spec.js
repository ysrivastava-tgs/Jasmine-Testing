var add = require('../add');

describe("Add Functionality",()=>{
    it("should add pos numbs",()=>{
        const result = add(4,5);
        expect(result).toEqual(9);
    });
    it("should add neg numbs",()=>{
        const result = add(-4,-5);
        expect(result).toEqual(-9);
    });
});

