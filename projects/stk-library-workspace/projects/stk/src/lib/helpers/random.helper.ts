export abstract class StkRandomHelper {
	public static getRandomValueFromArray<T>(arr: T[]): T {
		const randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	}

	public static getRandomNumberFromInterval(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
