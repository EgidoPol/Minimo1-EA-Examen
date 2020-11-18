import { Component, OnInit } from '@angular/core';
import { RolesService } from './../services/roles.service';
import {Rol} from './../../model/rol'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  rolesForm: FormGroup;
  isSubmitted = false;
  constructor(public  rolesService: RolesService, private router: Router, private formBuilder: FormBuilder) { }

  roles: Rol[];

  ngOnInit(): void {
    this.rolesForm = this.formBuilder.group({
      nombre:['', Validators.required],
      descripcion:[''],
      opciones:['']
    });
    this.getRoles();
  }
  get formControls(){return this.rolesForm.controls;}
  

  getRoles(){
    this.rolesService.loadRoles()
    .subscribe(roles => {
      this.roles = roles;
      console.log(roles);
    })
  }
  
  submitRol(){
    
    this.isSubmitted = true;
    if(this.rolesForm.invalid){
      return;
    }
    this.rolesService.newRol(this.rolesForm.value)
    .subscribe((rol: Rol) => {
      this.router.navigateByUrl('/roles');
    });
  }

  editRol(){
    this.isSubmitted = true;
    if(this.rolesForm.invalid){
      return;
    }
    this.rolesService.updateRol(this.rolesForm.value)
    .subscribe((rol: Rol) => {
      this.router.navigateByUrl('/roles');
    });
  }
}
