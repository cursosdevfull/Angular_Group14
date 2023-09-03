export interface StorageRepository {
  save(propertyName: string, value: string): void;
  recovery(propertyName: string): string;
  clean(): void;
  recoveryFieldInToken(field: string): string | string[];
}
