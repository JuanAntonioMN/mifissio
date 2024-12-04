import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]


@Component({
  selector: 'app-agendar',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './agendar.component.html',
  styleUrl: './agendar.component.css'
})
export class AgendarComponent implements OnInit{
  currentDate: Date = new Date();
  daysInMonth: number[] = [];
  monthNames: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  daysOfWeek: string[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];


  step = 1; // Paso inicial
 
  contactInfo = {
    name: '',
    phone: '',
    email: ''
  };

  appointment = {
    date: '',
    time: ''
  };

  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  confirmAppointment() {
    // Aquí podrías enviar los datos al servidor o mostrar un mensaje de confirmación
    alert('Cita agendada exitosamente');
  }

  ngOnInit(): void {
    this.renderCalendar(this.currentDate);
  }

   // Renderiza el calendario del mes actual
   renderCalendar(date: Date): void {
    const year = date.getFullYear();
    const month = date.getMonth();

    // Primer día del mes
    const firstDay = new Date(year, month, 1).getDay();

    // Número de días en el mes
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    this.daysInMonth = [];

    // Añadir días del mes
    for (let i = 0; i < firstDay; i++) {
      this.daysInMonth.push(0); // Rellenar con ceros los días vacíos
    }

    for (let day = 1; day <= daysInMonth; day++) {
      this.daysInMonth.push(day);
    }
  }

  // Navegar al mes anterior
  prevMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.renderCalendar(this.currentDate);
  }

  // Navegar al mes siguiente
  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.renderCalendar(this.currentDate);
  }

  // Obtener el nombre del mes
  getMonthName(): string {
    return this.monthNames[this.currentDate.getMonth()];
  }

  // Obtener el año
  getYear(): number {
    return this.currentDate.getFullYear();
  }
}
