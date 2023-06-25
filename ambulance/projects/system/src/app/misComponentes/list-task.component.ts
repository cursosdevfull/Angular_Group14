import { Component } from '@angular/core';

@Component({
  selector: 'amb-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent {
  tasks = [
    {
      title: 'Modificar el componente login para que soporte un re-captcha',
      responsableName: 'Jhonatan',
      points: 3,
    },
    {
      title:
        'Conectar el gráfico de valores con el API Rest de la bolsa de valores',
      responsableName: 'Pierina',
      points: 5,
      startDate: new Date(2023, 6, 27),
    },
    {
      title: 'Generar el código QR para futuras compras',
      responsableName: 'Juan Carlos',
      points: 2,
      startDate: new Date(2023, 7, 3),
    },
    {
      title: 'Implementar el formulario de pago de la pasarela',
      responsableName: 'Alejandra',
      points: 1,
      startDate: new Date(2023, 7, 21),
    },
    {
      title: 'Implementar el cambio de calendario cuando se agenda una cita',
      responsableName: 'Carmela',
      points: 2,
      startDate: new Date(2023, 7, 31),
    },
  ];
}
