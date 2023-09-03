export interface MedicEssential {
  nombre: string;
  segundo_nombre: string;
  apellido: string;
  cmp: string;
  correo: string;
  dni: string;
}

export interface MedicOptional {
  id: number;
  foto: string;
  activo: boolean;
}

export type MedicProperties = MedicEssential & Partial<MedicOptional>;
export type MedicUpdateProperties = {
  nombre: string;
  segundo_nombre: string;
  apellido: string;
  cmp: string;
  correo: string;
  dni: string;
  foto: string;
};

export class Medic {
  private readonly id: number = 0;
  private nombre: string = '';
  private segundo_nombre: string = '';
  private apellido: string = '';
  private cmp: string = '';
  private correo: string = '';
  private dni: string = '';
  private foto: string = '';
  private activo: boolean;

  constructor(properties: MedicProperties) {
    if (properties.nombre.length < 3)
      throw new Error('Nombre must be at least 3 characters long');

    Object.assign(this, properties);
    this.activo = true;
  }

  update(properties: MedicUpdateProperties) {
    Object.assign(this, properties);
  }

  delete() {
    this.activo = false;
  }
}
