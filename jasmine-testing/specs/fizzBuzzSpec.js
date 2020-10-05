describe("fizzBuzz", function() {
    beforeEach(function() {
        buzz = new fizzBuzz();
    })

    describe("Check Number", function() {
        it("should return `FizzBuzz` when number is divisible by 3 and 5", function() {
            var number = fizzBuzz(15)
            expect(number).toBe("FizzBuzz");
        });
        
        it("should return `Fizz` when number is divisible by 3", function() {
            var number = fizzBuzz(3)
            expect(number).toBe("Fizz");
        });

        it("should return `Fizz` when number is divisible by 5", function() {
            var number = fizzBuzz(5)
            expect(number).toBe("Buzz");
        });

        it("should return the number when all else", function() {
            var number = fizzBuzz(5)
            expect(number).toBe(number);
        });
    })
})