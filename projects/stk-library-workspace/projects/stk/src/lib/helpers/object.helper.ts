export abstract class StkObjectHelper {
	public static clone<T>(obj: T): T {
		return JSON.parse(JSON.stringify(obj) as string) as T;
	}
}
