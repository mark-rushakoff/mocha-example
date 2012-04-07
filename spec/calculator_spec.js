function assert(bool) {
    if (!bool) {
        throw ("Assertion failed");
    }
}

describe("Calculator", function() {
    describe("#add", function() {
        it("adds correctly", function() {
            var sum = Calculator.add(1, 2);
            assert(sum == 3);
        });
    });

    describe("#multiply", function() {
        it("multiplies correctly", function() {
            var product = Calculator.multiply(2, 3);
            assert(product == 6);
        });
    });

    // divide not implemented, expected to fail
    describe("#divide", function() {
        it("divides correctly", function() {
            var quotient = Calculator.divide(10, 5);
            assert(quotient == 2);
        });
    });

    // subtract not implemented, expected to fail
    describe("#subtract", function() {
        it("subtracts correctly", function() {
            var difference = Calculator.subtract(9, 5);
            assert(difference == 4);
        });
    });
});
