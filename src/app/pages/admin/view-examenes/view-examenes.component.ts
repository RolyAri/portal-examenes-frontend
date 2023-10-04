import { Component } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css']
})
export class ViewExamenesComponent {
  examenes: any = [

  ]
  constructor(private examenesService:ExamenService){}

  ngOnInit(): void {
    this.examenesService.listarCuestionarios().subscribe(
      (dato:any) =>{
        this.examenes = dato;
        console.log(this.examenes);
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error','Error al cargar los exámenes','error');
      }
    )
  }
  eliminarExamen(examenId:any){
    Swal.fire({
      title: 'Eliminar examen',
      text: '¿Estás seguro de eliminar el exámen?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(
      (result) => {
        if(result.isConfirmed){
          this.examenesService.eliminarExamen(examenId).subscribe(
            (data) => {
              this.examenes = this.examenes.filter((examen:any)=>examen.examenId != examenId);
              Swal.fire('Examen eliminado','El exámen ha sido eliminado con éxito','success');
            },
            (error) =>{
              Swal.fire('Error!!','Error al eliminar el exámen','error');
            }
          )
        }
      }
    )
  }
}
