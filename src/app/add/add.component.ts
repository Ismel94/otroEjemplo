import { Component, OnInit } from '@angular/core';
import { NativeScriptFormsModule } from '@nativescript/angular/lib/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Label, TextField } from '@nativescript/core';
import { Router } from '@angular/router';
import { ItemService } from '../item/item.service';

@Component({
	moduleId: module.id,
	selector: 'add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

	formulario: FormGroup;
	//nombre: TextField;
	//nombre:string;
	//precio:number;
	//importada:boolean;
	//text: Label;

	constructor(private readonly fb: FormBuilder, private piezaServ: ItemService, private router:Router) { }

	ngOnInit() {
		this.formulario = this.buildForm();
	}

	buildForm(): FormGroup {
		return this.fb.group({
			nombre: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
			precio: ['', [Validators.required]],
			importada: []
		})
	}

	public enviar() {
		//let pieza = new Pieza
		if (this.formulario.valid) {
			console.log('Formulario Valido');
			this.piezaServ.save(this.formulario.value).subscribe(res => {
				console.log('SAVE!!');
				this.router.navigate(['items']);
			},
			error => {
				console.log('Error no save');
			}
			)
		}

		//const formPieza = document.getElementById('formPieza');
		//formPieza.onsubmit(new SubmitEvent('click'));
	}
}