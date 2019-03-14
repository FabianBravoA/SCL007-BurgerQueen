import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CommandInterface  } from '../models/command';
import { ProductInterface } from '../models/products'
import { Observable  } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs:AngularFirestore) {
    this.commandCollection = afs.collection<CommandInterface>('commands');
    this.commands = this.commandCollection.valueChanges();

  }
    private commandCollection: AngularFirestoreCollection<CommandInterface>;
    private commands: Observable<CommandInterface[]>;
    private commandDoc: AngularFirestoreDocument<CommandInterface>;
    private command: Observable<CommandInterface>;

  getAllCommands(){
      return this.commands = this.commandCollection.snapshotChanges()
      .pipe(map( changes =>{
        return changes.map( action =>{
          const data = action.payload.doc.data() as CommandInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  addCommand(command: CommandInterface):void{
    this.commandCollection.add(command);
  }
  updateCommand(command: CommandInterface):void{
  let idCommand = command.id;
  this.commandDoc = this.afs.doc<CommandInterface>(`commands/${idCommand}`);
  this.commandDoc.update(command);
}
  deleteCommandOrProducts(idCommand: string):void{
    this.commandDoc = this.afs.doc<CommandInterface>(`commands/${idCommand}`);
    this.commandDoc.delete();
  }
}