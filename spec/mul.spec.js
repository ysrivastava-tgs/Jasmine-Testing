var add = require('../mul');

describe("Mul Functionality",()=>{
    it("should mul pos numbs",()=>{
        const result = add(4,5);
        expect(result).toEqual(20);
    });
    it("should mul neg numbs",()=>{
        const result = add(-4,-5);
        expect(result).toEqual(20);
    });
});

