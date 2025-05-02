// working on single user with different attributes
// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {

//   // Using Zone.js built-in state management

//   // selectedUser = DUMMY_USERS[randomIndex];

//   // get imagePath() {
//   //   // return `../../assets/users/${this.selectedUser.avatar}`;
//   //   return '../../assets/users/' + this.selectedUser.avatar;
//   // }

//   // onSelectUser() {
//   //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//   //   return (this.selectedUser = DUMMY_USERS[randomIndex]);
//   // }

//   // Using signals state management --- introduced after angular 16 --- more efficient than Zone.js --- not checking for every change in the component tree again and again
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => '../../assets/users/' + this.selectedUser().avatar)

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }

// }

//multiple users
import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  output,
} from '@angular/core';
import { User } from './user.model'; //importing the user model from user.model.ts
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Using Zone.js built-in state management
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // Inputs are used to pass data from the parent component to the child component.
  // Outputs are used to pass data from the child component to the parent component so child can talk to parent about changes happened inside of it.
  // The @Input() decorator is used to mark a property as an input property, which can receive data from the parent component.
  // The @Output() decorator is used to mark a property as an output property, which can emit events to the parent component.
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  //signal based approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => '../../assets/users/' + this.avatar());
  // select = output<string>(); // same as event emiiter with Output decorator and doesnot create a signal unlike input

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
