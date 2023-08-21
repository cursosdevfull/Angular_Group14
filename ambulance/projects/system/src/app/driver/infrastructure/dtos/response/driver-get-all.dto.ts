import { DriverGetAllResult } from '../../../application/results/driver-get-all.result';

export class DriverGetAllDto {
  static fromDataToResult(data: any[]): DriverGetAllResult[] {
    return data.map((item) => {
      const result = new DriverGetAllResult();
      result.id = item.id;
      result.name = item.nombre;
      result.active = item.activo;
      return result;
    });
  }
}
