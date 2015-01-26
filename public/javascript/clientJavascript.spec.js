
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    //this test should fail.
    it('this test should fail!', function(){
        expect(returnKittens()).toBe("kittens");
    });

    it("this function should return two numbers added together",function(){
        expect(addNumbers(2,3)).toBe(5);
    });
});

