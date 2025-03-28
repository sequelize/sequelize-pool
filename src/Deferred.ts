import { TimeoutError } from './TimeoutError';

interface DeferredOptions {
  errorMessage?: string;
}
/**
 * Deferred Implementation
 *
 * @private
 */
export class Deferred<T> {
  protected _promise: Promise<T>;
  protected _resolve: (value: T) => void;
  protected _reject: (error: Error) => void;
  protected _timeout: NodeJS.Timer;
  private options: DeferredOptions;

  constructor(options: DeferredOptions = {}) {
    this.options = options;
    this._promise = new Promise((resolve, reject) => {
      this._reject = reject;
      this._resolve = resolve;
    });
  }

  registerTimeout(timeoutInMillis: number, callback: Function): void {
    if (this._timeout) return;

    this._timeout = setTimeout(() => {
      callback();
      this.reject(
        new TimeoutError(this.options.errorMessage ?? 'Operation timeout'),
      );
    }, timeoutInMillis);
  }

  protected _clearTimeout(): void {
    if (!this._timeout) return;
    clearTimeout(this._timeout);
  }

  resolve(value: T): void {
    this._clearTimeout();
    this._resolve(value);
  }

  reject(error: Error): void {
    this._clearTimeout();
    this._reject(error);
  }

  promise(): Promise<T> {
    return this._promise;
  }
}
