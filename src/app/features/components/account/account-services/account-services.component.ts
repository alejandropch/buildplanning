import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-account-services',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './account-services.component.html',
  styleUrls: ['./account-services.component.css']
})
export class AccountServicesComponent {
  services = [
    { title: 'Inspección de obra', date: '2024-11-20', status: 'Completado' },
    { title: 'Supervisión de tareas', date: '2024-12-01', status: 'Completado' },
    { title: 'Coordinación de maquinaria', date: '2025-01-10', status: 'Pendiente' }
  ];
}
