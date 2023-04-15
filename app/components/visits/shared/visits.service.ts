import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Visits } from "./visits";
import {
  AngularFireDatabase,
  AngularFireList,
} from "@angular/fire/compat/database";

@Injectable({
  providedIn: "root",
})
export class VisitsService {
  private visitsRef: AngularFireList<any>;
  private visits: Observable<Visits[]>;

  constructor(private db: AngularFireDatabase) {
    this.visitsRef = db.list("visits");
    this.visits = this.visitsRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  getVisits(): Observable<Visits[]> {
    return this.visits;
  }

  addVisits(visits: Visits) {
    this.visitsRef.push(visits);
  }

  updateVisits(key: string, value: any): Promise<void> {
    return this.visitsRef.update(key, value);
  }

  deleteVisits(key: string): Promise<void> {
    return this.visitsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.visitsRef.remove();
  }

  addComment(visitsId: string, comment: any) {
    const commentsRef = this.db.list(`visits/${visitsId}/comments`);
    commentsRef.push(comment);
  }

  getComments(visitsId: string): Observable<any[]> {
    return this.db.list(`visits/${visitsId}/comments`).valueChanges();
  }

  updateComment(visitsId: string, commentId: string, value: any): Promise<void> {
    const commentRef = this.db.object(`visits/${visitsId}/comments/${commentId}`);
    return commentRef.update(value);
  }

  deleteComment(visitsId: string, commentId: string): Promise<void> {
    const commentRef = this.db.object(`visits/${visitsId}/comments/${commentId}`);
    return commentRef.remove();
  }
}
