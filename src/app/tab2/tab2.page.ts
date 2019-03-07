import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public foods: any;
  public reg: string;

  constructor(private as: ApiService, private loadingCtrl: LoadingController){}

  async getFood(reg){
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'bubbles',
      duration: 2000
    });
    this.as.getFoodApi(reg)
      .then(data =>{
        console.log(data)
        this.foods = data['hits'];
      });
    return await loader.present()
  }
}
