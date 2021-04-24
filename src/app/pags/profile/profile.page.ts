import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddresService } from 'src/app/services/addres.service';
import { AlertService } from 'src/app/services/alert.service';
import { AppInfoService } from 'src/app/services/app-info.service';
import { ImageService } from 'src/app/services/image.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/structure/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public title: string = "Perfil";
  public id: string = null;
  public user: User = new User();
  public telephone: string;
  private loadingPopupID: string;

  //Subscriptions
  private subscription1: Subscription;
  private subscription2: Subscription;
  private subscription3: Subscription;
  private subscription4: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private imageService: ImageService,
    private router: Router, private alertService: AlertService, private addressService: AddresService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getUser();
  }

  ionViewWillLeave() {
    if (this.subscription1 && !this.subscription1.closed)
      this.subscription1.unsubscribe();
    if (this.subscription2 && !this.subscription2.closed)
      this.subscription2.unsubscribe();
    if (this.subscription3 && !this.subscription3.closed)
      this.subscription3.unsubscribe();
    if (this.subscription4 && !this.subscription4.closed)
      this.subscription4.unsubscribe();
  }

  async getUser() {//getting overly complicated, todo divide into multiple methods
    await this.alertService.presentLoading().then(ans => this.loadingPopupID = ans);
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.subscription1 = (await this.userService.Get(this.id)).subscribe(async ans => {
        this.user = ans;
        this.telephone = this.GetUITel(ans.tel);
        this.title = `Perfil de ${ans.name}`;
        if (ans.addressId)
          this.subscription2 = (await this.addressService.Get(ans.addressId)).subscribe(async ans2 => this.user.address = ans2);
        await this.alertService.dismissLoading(this.loadingPopupID);
      });
    }
    this.subscription3 = AppInfoService.GetUserInfo().subscribe(async ans => {
      if (ans) {
        if (!this.id) {
          this.user = ans;
          this.title = `Perfil de ${ans.name}`;
          this.telephone = this.GetUITel(ans.tel);
          if (ans.addressId)
            this.subscription4 = (await this.addressService.Get(ans.addressId)).subscribe(ans2 => this.user.address = ans2);
        }
        this.user.id = ans.id;
        await this.alertService.dismissLoading(this.loadingPopupID);
      }
      if (!this.id && !ans) {
        await this.alertService.dismissLoading(this.loadingPopupID);
        await this.router.navigate(["/login"]);
      }
    }, async err => {
      await this.alertService.dismissLoading(this.loadingPopupID);
      this.user = null;
      await this.router.navigate(["/login"]);
    });
  }

  async alterPhoto() {
    await this.imageService.getImage().then(async returnedPhoto => {
      await this.alertService.presentLoading().then(ans => this.loadingPopupID = ans);
      if (returnedPhoto) {
        await this.userService.UpdatePhoto(this.user.id, returnedPhoto).then(async () => {
          this.user.photo = returnedPhoto;
          await this.alertService.dismissLoading(this.loadingPopupID);
        });
      } else
        await this.alertService.dismissLoading(this.loadingPopupID);
    });
  }

  async logout() {
    await this.alertService.presentLoading();
    await this.userService.auth.signOut().then(async () => {
      await this.alertService.dismissLoading();
      await this.router.navigate(["/"]);
    });
  }

  GetUITel(tel: string) {
    var ddd = tel.substring(0, 2);
    var number = tel.substring(2);
    var length: number = number.length;
    var part1, part2
    if (length === 9) {
      part1 = number.substring(0, 5);
      part2 = number.substring(5,);
    }
    if (length === 8) {
      part1 = number.substring(0, 4);
      part2 = number.substring(4,);
    }
    return `(${ddd}) ${part1}-${part2}`
  }
}