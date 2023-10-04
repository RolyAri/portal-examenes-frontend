import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css']
})
export class ActualizarExamenComponent {
  constructor(private route:ActivatedRoute, private examenService:ExamenService, private categoriaService: CategoriaService, private router:Router){}
  examenId = 0;
  examen:any;
  categorias:any;
  ngOnInit():void{
    this.examenId = this.route.snapshot.params['examenId'];
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (data)=>{
        this.examen = data;
        console.log(this.examen);
      },
      (error)=>{
        console.log(error);
      }
    );
    this.categoriaService.listarCategorias().subscribe(
      (data:any)=>{
        this.categorias=data;
      },
      (error)=>{
        alert('Error al cargar las categorias');
      }
    )
  }
  public actualizarDatos(){
    this.examenService.actualizarExamen(this.examen).subscribe(
      (data)=>{
        Swal.fire('Exámen actualizado','El exámen ha sido actualizado con éxito','success').then(
          (e)=>{
            this.router.navigate(['/admin/examenes']);
          }
        );
      },
      (error)=>{
        Swal.fire('Error al actualizar','No se ha podido actualizar el exámen','error');
        console.log(error);
      }
    );
  }
}
