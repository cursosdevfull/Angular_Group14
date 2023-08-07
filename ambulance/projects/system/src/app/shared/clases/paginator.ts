import { MatPaginatorIntl } from '@angular/material/paginator';

export class Paginator extends MatPaginatorIntl {
  override nextPageLabel = 'Siguiente página';
  override firstPageLabel = 'Primera página';
  override lastPageLabel = 'Última página';
  override previousPageLabel = 'Página anterior';
  override itemsPerPageLabel = 'Registros por página';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    return 'Página ' + (page + 1) + ' de ' + Math.ceil(length / pageSize);
  };
}
