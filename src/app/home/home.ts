import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule, JsonPipe, NgIf, NgFor } from '@angular/common';
import { PageModel } from '../../models/page.model';
import { FlightModel } from '../../models/flight.model';
import { SafePipe } from '../safe.pipe';
import { RouterLink } from '@angular/router';
import { WebService } from '../web.service';


@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    NgIf, 
    HttpClientModule,
    NgFor, 
    CommonModule, 
    SafePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  public webService: WebService
  public flights: PageModel<FlightModel> | null = null

  constructor() {
    this.webService = new WebService()
  }

  ngOnInit(): void {
    this.webService.getRecommendedFlights().subscribe((res: PageModel<FlightModel>) => this.flights = res)
  }

  public getDestinationImage(dest: string) {
    return 'https://img.pequla.com/destination/' + dest.split(" ")[0].toLowerCase() + '.jpg'
  }

  public getMapUrl() {
    return `https://www.google.com/maps?output=embed&q=${this.flights?.content[0].destination}`
  }

  public formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS')
  }
}
