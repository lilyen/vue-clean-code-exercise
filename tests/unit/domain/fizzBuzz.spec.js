function passNum(num) {
    if (num % 3 !== 0 && num % 5 !== 0) {
        return num.toString();
    }

    var str = "";
    if (num % 3 === 0) {
        str += "fizz";
    }
    if (num % 5 === 0) {
        str += "buzz";
    }
    return str;
}


describe('fizzBuzz', () => {
    it('should return 1', () => {
        expect(passNum(1)).toEqual("1")
    })
    it('3 should return fizz', () => {
        expect(passNum(3)).toEqual("fizz")
    })
});
