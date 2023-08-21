export interface DriverEssential {
  nombre: string;
}

export interface DriverOptional {
  id: number;
  activo: boolean;
}

export type DriverProperties = DriverEssential & Partial<DriverOptional>;
export type DriverUpdateProperties = {
  nombre: string;
};

export class Driver {
  private readonly id: number = 0;
  private nombre: string = '';
  private activo: boolean;

  constructor(properties: DriverProperties) {
    if (properties.nombre.length < 3)
      throw new Error('Nombre must be at least 3 characters long');

    Object.assign(this, properties);
    this.activo = true;
  }

  update(properties: DriverUpdateProperties) {
    Object.assign(this, properties);
  }

  delete() {
    this.activo = false;
  }
}
