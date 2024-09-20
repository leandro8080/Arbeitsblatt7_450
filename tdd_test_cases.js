// https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/
function formatCurrency(currency) {
	const usDollar = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	});

	return usDollar.format(currency);
}

function transformArrayToObject(arr) {
	const objectOfArray = {};
	for (i = 0; i < arr.length; i++) {
		const key = arr[i][0];
		const value = arr[i][1];
		objectOfArray[key] = value;
	}

	return objectOfArray;
}

function capitalizeFirstLetter(word) {
	return word[0].toUpperCase() + word.substring(1);
}

function convertToCamelCase(words) {
	const wordsArray = words.split(" ");
	for (i = 1; i < wordsArray.length; i++) {
		wordsArray[i] =
			wordsArray[i][0].toUpperCase() + wordsArray[i].substring(1);
	}

	return wordsArray.join("");
}

module.exports = {
	formatCurrency,
	transformArrayToObject,
	capitalizeFirstLetter,
	convertToCamelCase
};
