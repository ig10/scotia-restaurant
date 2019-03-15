import { Component, OnInit, Input } from '@angular/core';

export interface ISocial {
  name: string;
  url: string;
  alt: string;
}

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  @Input() icons: boolean;

  socialList = [
    { name: 'google', url: 'http://google.com/+', alt: 'Google+' },
    { name: 'facebook', url: 'https://www.facebook.com/ilfornelloking/', alt: 'Il Fornello' },
    { name: 'linkedin', url: 'http://www.linkedin.com/in/', alt: 'LinkedIn' },
    { name: 'twitter', url: 'http://twitter.com/', alt: 'Twitter' },
    { name: 'youtube', url: 'http://youtube.com/', alt: 'Youtube' },
    { name: 'email', url: 'mailto:', alt: 'Email' }
  ] as ISocial[];

  constructor() { }

  ngOnInit(): void { }
}
