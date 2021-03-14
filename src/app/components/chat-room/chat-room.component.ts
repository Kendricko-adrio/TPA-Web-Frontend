import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit, OnChanges {

  @Input() user;

  messages = [];
  privateMessageQuery;
  isLoading;
  text;

  constructor(
    private chatService: ChatService
  ) {
    // this.privateMessageQuery = this.chatService.getChat(this.user?.userID);
  }


  ngOnInit(): void {
    this.chatService.getChat(this.user?.userID).valueChanges.subscribe(
      data => {
        this.messages = data.data.getChat;
      }
    );
    this.chatService.newMessageAdded().subscribe(data => {
      const message = data.data?.newMessageAdded;
      if (message) {
        this.messages = [message, ...this.messages];
      }
    });
  }

  onSubmit(): void{
    this.isLoading = true;
    this.chatService.addMessage(this.user.userID, this.text).subscribe(data => {
      const message = data.data?.addMessage;
      console.log();
      if (message){
        this.messages = [message, ...this.messages];
        this.text = '';
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.messages = [];
    // this.privateMessageQuery.refetch({receiverId: this.user?.userID}).then();
    // this.chatService.getChat(this.user?.userID).subscribe(
    //   data => {
    //     this.messages = data.data.getChat;
    //   }
    // );
  }

}
