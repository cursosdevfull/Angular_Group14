import { MedicGetAllResult } from '../../../application/results/medic-get-all.result';

export class MedicGetAllDto {
  static fromDataToResult(data: any[]): MedicGetAllResult[] {
    return data.map((item) => {
      const result = new MedicGetAllResult();
      result.id = item.id;
      result.name = item.nombre;
      result.secondname = item.segundo_nombre;
      result.lastname = item.apellido;
      result.dni = item.dni;
      result.cmp = item.cmp;
      result.email = item.correo;
      result.photo = item.foto;
      result.active = item.activo;
      return result;
    });
  }
}
