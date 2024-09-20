function isAllCaps(text) {
	return text === text.toUpperCase();
}

function countVowels(text) {
	const vowels = ["a", "e", "i", "o", "u"];
	const vowelsOfText = text
		.split("")
		.filter((letter) => vowels.includes(letter));
	return vowelsOfText.length;
}

function mergeAndSortArrays(arr1, arr2) {
	const mergedArray = [...arr1, ...arr2];
	return mergedArray.slice().sort();
}

function findDuplicates(arr) {
	let sorted_arr = arr.slice().sort();
	let results = [];
	for (let i = 0; i < sorted_arr.length; i++) {
		if (
			sorted_arr[i + 1] === sorted_arr[i] &&
			!results.includes(sorted_arr[i])
		) {
			results.push(sorted_arr[i]);
		}
	}
	return results;
}

module.exports = { isAllCaps, countVowels, mergeAndSortArrays, findDuplicates };
