export type HtmlElementEvent<T> = KeyboardEvent & { target: T & EventTarget };
