describe("whatCanIDrink", function() {
    beforeEach(function() {
        youDrink = new whatCanIDrink();
    })

    describe("Check Age", function() {
        it("should return `Sorry. I can’t tell what drink because that age is incorrect!` when Age is less 0", function() {
            var result = whatCanIDrink(-1)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should return `Drink Toddy` when Age is less than 14", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });

        it("should return `Drink Coke` when Age is less than 18", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });

        it("should return `Drink Beer` when Age is less than 21", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });

        it("should return `Drink Whiskey` when Age is less than 130", function() {
            var result = whatCanIDrink(129)
            expect(result).toBe("Drink Whiskey");
        });

        it("should return `Sorry. I can’t tell what drink because that age is incorrect!` when Age is >= 130 ", function() {
            var result = whatCanIDrink(130)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    })
})