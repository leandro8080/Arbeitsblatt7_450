const {
	isAllCaps,
	countVowels,
	mergeAndSortArrays,
	findDuplicates
} = require("./tdd_own_test_cases");

describe("isAllCaps", () => {
	test("should say true for HELLO", () => {
		const result = isAllCaps("HELLO");
		const expectation = true;
		expect(result).toBe(expectation);
	});

	test("should say false for hello", () => {
		const result = isAllCaps("hello");
		const expectation = false;
		expect(result).toBe(expectation);
	});
});

describe("countVowels", () => {
	test("should count 3 in banana", () => {
		const result = countVowels("banana");
		const expectation = 3;
		expect(result).toBe(expectation);
	});

	test("should count 0 in sky", () => {
		const result = countVowels("sky");
		const expectation = 0;
		expect(result).toBe(expectation);
	});
});

describe("mergeAndSortArrays", () => {
	test("should merge two diffrent arrays together and sort them", () => {
		const result = mergeAndSortArrays([3, 1], [4, 2]);
		const expectation = [1, 2, 3, 4];
		expect(result).toEqual(expectation);
	});
});

describe("findDuplicates", () => {
	test("should only get numbers, that are in there twice or more", () => {
		const result = findDuplicates([1, 2, 2, 3, 4, 4]);
		const expectation = [2, 4];
		console.log(result);
		expect(result).toEqual(expectation);
	});
});
