import { Component } from '@angular/core';
import {marked} from "marked";

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
export class EditableComponent {
  parsedContent = "";
  updateNode(update: HTMLParagraphElement){
    this.parsedContent = marked.parse(update.innerText);
    // this.parsedContent = update.innerText;
  }
}
