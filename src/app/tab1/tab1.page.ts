import { Component } from '@angular/core';
import { BmiInterface } from '../bmi-interface';
import { ProcessService } from '../services/process.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  height: number;
  weight: number;
  BMI: BmiInterface;

  constructor(private process: ProcessService, private alertCtrl: AlertController){}

  async calculateBMI(){
    
    if(this.height == null || this.weight == null){
      let alert = await this.alertCtrl.create({
        message: "Please fill in all fields",
        buttons: ["OK"]
      });
      await alert.present();
    }else{
      this.BMI = this.process.calBmi(this.height, this.weight);
    }
  }
}
