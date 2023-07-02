export class LogService {
  info(message: string) {
    console.log('%c %s', 'red', message);
  }
}
