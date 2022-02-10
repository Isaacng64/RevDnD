import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment } from '../equipment';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {

  id!: number;
  equipment: Equipment = new Equipment();

  constructor(
    private equipmentService: EquipmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];   // to take in the id param from the url
    this.equipmentService.getEquipmentById(this.id).subscribe(data => {
      this.equipment = data;
    });
  }

  onSubmit() {
    this.equipmentService.updateEquipment(this.id, this.equipment).subscribe(data => {
      this.goToEquipmentList();
    });
  }

  goToEquipmentList() {
    this.router.navigate(['/equipment']);
  }

}
