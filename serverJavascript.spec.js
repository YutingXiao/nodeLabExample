/**
 * Created by xiaox232 on 1/26/15.
 */
describe('testing functions', function(){

    it("this function should calculate a gpa",function(){
        expect(gpaFinder(1,'c',3,'c',5,'c')).toBe(2);
        expect(gpaFinder(1,'a',2,'a',3,'a')).toBe(4);
        expect(gpaFinder(2,'b',2,'b',2,'b')).toBe(3);
    });
});