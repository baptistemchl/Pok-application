import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthentificationService } from './auth.service';

@Component({
	selector: 'login',
	template: `
    <div class='row'>
    <div class="col s12 m4 offset-m4">
    <div class="card hoverable">
      <div class="card-content center">
          <span class="card-title">Page de connexion</span>
          <p><em>{{message}}</em></p>
      </div>
			<form #loginForm="ngForm">
	      <div>
					<label for="name">Nom du dresseur</label>
	        <input type="text" id="name" [(ngModel)]="name" name="name" required>
	      </div>
	      <div>
	        <label for="password">Mot de passe</label>
	        <input type="password" id="password" [(ngModel)]="password" name="password" required>
	      </div>
	    </form>
      <div class="card-action center">
        <a (click)="login()" class="waves-effect waves-light btn"  *ngIf="!authentificationService.connected">Se connecter</a>
      </div>
    </div>
    </div>
    </div>
  `
})
export class LoginComponent {
	message: string = 'Identifiants (pikachu/pikachu)';
	public name: any;
	public password: any;

	constructor(
		public authentificationService: AuthentificationService,
		private router: Router,
		private titleService: Title) { }

	ngOnInit() {
		this.titleService.setTitle('Connexion');
	}

	setMessage() {
		this.message = this.authentificationService.connected ?
			'Bienvenue !' : 'Mot de passe ou nom du dresseur incorrect';
	}

	login() {
		this.message = 'Connexion ...';
		this.authentificationService.login(this.name, this.password).subscribe(() => {
			this.setMessage();
			if (this.authentificationService.connected) {
				let redirect = this.authentificationService.redirectTo ? this.authentificationService.redirectTo : '/pokemon/all';

				this.router.navigate([redirect]);
			} else {
				this.password = '';
			}
		});
	}
}
