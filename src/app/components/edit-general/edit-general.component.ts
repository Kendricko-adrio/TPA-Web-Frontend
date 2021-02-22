import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {CountryServiceService} from '../../services/country-service.service';

@Component({
  selector: 'app-edit-general',
  templateUrl: './edit-general.component.html',
  styleUrls: ['./edit-general.component.scss']
})
export class EditGeneralComponent implements OnInit {

  profileName = '';
  realName = '';
  customUrl = '';
  summary = '';
  countryId ;
  country: any;
  user: any;
  hideAward ;
  constructor(
    private userService: UserService,
    private service: CountryServiceService
  ) {
  }

  ngOnInit(): void {
    this.service.getAllCountry().subscribe(async data => {
      this.country = data.data.getAllCountry;
      // console.log(this.country)
    });
    console.log(UserService.userAuth.userName);
    this.userService.getUserByUsername(UserService.userAuth.userName).subscribe(async data => {
      this.user = data.data.getUser;
      this.profileName = this.user.userName;
      this.realName = this.user.profileName;
      this.customUrl = this.user.customUrl;
      this.summary = this.user.summary;
      this.countryId = this.user.CountryId;
      this.hideAward = this.user.hideAward;
      console.log(data.data);
    });

  }

  submit(): void {
    // console.log(this.user);
    // console.log(this.user.profileName, this.user.realName, this.user.customUrl,
    //   this.user.countryId, this.user.summary, this.user.hideAward);
    this.userService.updateGeneral(this.profileName, this.realName, this.customUrl,
      this.countryId, this.summary, this.hideAward);

  }

}
