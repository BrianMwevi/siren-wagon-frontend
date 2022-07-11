import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  package:any =[]

  constructor(private package__service : PackageService) { }

 payment(): void{
   this.package__service.getPackages().subscribe((data)=>{
     this.package = data

     console.log(this.package)
    })
  }
 
   ngOnInit(): void {
     this.payment() 
   }
 
 }