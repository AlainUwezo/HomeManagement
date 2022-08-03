import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {

  addHomeForm!:FormGroup;
  apparitorGroup!:FormGroup;
  // namePattern = "^[a-z]$";s

  floorGroup = this.formBuilder.group({
    floors: this.formBuilder.array([])
  });

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
      

      this.addHomeForm = this.formBuilder.group({
        apparitorGroup: this.formBuilder.group({
          apparitor_firstname: [null, [Validators.required]],
          apparitor_lastname: [null, [Validators.required]],
          apparitor_email:[null, [Validators.required, Validators.email]],
          apparitor_phone: [null, [Validators.required]]
        }),
        homeGroup: this.formBuilder.group({
          code_home: [null, [Validators.required]],
          home_name: [null, [Validators.required]]
        })
      });
      this.addFloor();
  }

  get floors(){
    return this.floorGroup.controls["floors"] as FormArray;
  }

  addFloor(){
    const floorForm = this.formBuilder.group({
      door_number: [null, Validators.required],
      door_price: [null, [Validators.required]]
    });
    this.floors.push(floorForm);
  }

  deleteFloor(index: number){
    if(this.floors.length > 1){
      this.floors.removeAt(index);
    }else{
      window.alert("Ne peut avoir moind d'un niveau");
    }
  }

}
