import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-europw',
  templateUrl: './europw.component.html',
  styleUrls: ['./europw.component.css']
})
export class EuropwComponent implements OnInit {

  arrCountries: Country[] = [];
  lat: number = 40;
  long: number = 3;
  zoom: number = 5;


  constructor(
    private countriesService: CountriesService
  ) { }

  async ngOnInit(): Promise<void> {

    try{
      this.arrCountries = await this.countriesService.getAll();
      console.log(this.arrCountries);
    }catch(err){
      console.log(err);
    }finally{
      console.log("Ocurre Siempre")
    }

    //El async await no gestiona errores, por eso usamos el tryCatch
    
  }

}
