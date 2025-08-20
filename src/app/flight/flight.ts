import { Component } from '@angular/core';
import { ActivatedRoute, NavigationSkipped, RouterLink } from '@angular/router'
import { WebService } from '../web.service';
import { FlightModel } from '../../models/flight.model';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [HttpClientModule, RouterLink, NgIf, SafePipe],
  templateUrl: './flight.html',
  styleUrl: './flight.css'
})
export class FlightComponent {

  public webService: WebService;
  public flight: FlightModel | null = null;

  constructor(private route: ActivatedRoute) {
    this.webService = new WebService();
    route.params.subscribe(params => { 
      // Preuzimamo varijable iz putanje
      const id = params['id'];

      // Preuzimamo JSON objekat leta za ID
      this.webService.getFlightById(id)
      .subscribe(rsp => this.flight = rsp);
    });
  }
  public getMapUrl() {
    return `https://www.google.com/maps?output=embed&q=${this.flight?.destination}`
  }
}
