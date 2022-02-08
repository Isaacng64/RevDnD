import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from '../equipment';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {

  equipment: Equipment = new Equipment();

  constructor(private equipmentService: EquipmentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEquipment() {
    this.equipmentService.createEquipment(this.equipment).subscribe(data => {
      console.log(data);
      this.goToEquipmentList();
    });
  }

  goToEquipmentList(){
    this.router.navigate(['equipment']);
  }

  onSubmit() {
    console.log(this.equipment);
    this.saveEquipment();
  }

}
