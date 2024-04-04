import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  isSaveButtonActive : boolean = false;
  currentIndex : number = -1;
  name : string = '';
  salary : string = '';
  date : string = '';
  users : any[] = [];

  addUser() {
    if (this.name !== '' && this.salary !== '' && this.date !== '') {
      this.users.push({
        name : this.name,
        salary : this.salary,
        date : this.date
      });

      this.name = '';
      this.salary = '';
      this.date = '';
    } else {
      alert("Please fill in all fields.");
    }
  }

  deleteUser(index : number){
    this.users.splice(index, 1);
  }

  editUser(index : number){
    const user = this.users[index];
    this.name = user.name;
    this.salary = user.salary;
    this.date = user.date;
    this.currentIndex = index;
    this.isSaveButtonActive = !this.isSaveButtonActive;
  }

  save(){
    if (this.name !== '' && this.salary !== '' && this.date !== '') {
      const user = this.users[this.currentIndex];
        
      user.name = this.name;
      user.salary = this.salary;
      user.date = this.date;

      this.users[this.currentIndex] = user;

      this.name = '';
      this.salary = '';
      this.date = '';
    } else {
      alert("Please fill in all fields.");
    }
    this.isSaveButtonActive = !this.isSaveButtonActive;
  }
}