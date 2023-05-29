import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public appointmentList: Appointment[] = [];

  displayedColumns: string[] = ['id', 'date', 'doctor', 'seen'];

  ngOnInit(): void {
    this.appointmentList = [
      { id: 0, date:new Date(), doctor: 'Available',  seen: true},
      { id: 0, date:new Date(), doctor: 'Available',  seen: true},
      { id: 0, date:new Date(), doctor: 'Available',  seen: true},
    ];
  }
}
