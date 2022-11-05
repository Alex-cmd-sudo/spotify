import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  public mockCover:any = {
    cover: 'https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/74/c4/c2/74c4c298-a850-c30c-652f-36a333ca74a7/0617465031861.png/600x600bf-60.jpg',
    album: 'Gioli & Assi',
     name: 'Bebe (oficial)'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
