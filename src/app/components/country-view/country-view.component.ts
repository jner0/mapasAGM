import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/interfaces/country.interface';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {
  myCountry!: Country
  constructor(
    private countriesServices: CountriesService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    
    
    this.activatedRoute.params.subscribe((params:any) =>{
      const code: string = params.code

      this.countriesServices.getByCode(code)
        .then((data) => {
          this.myCountry = data[0];
        })
        .catch((err) => {})
    })

  }

}
