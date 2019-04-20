import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Posts = [
    {
      title: 'Premier Blog',
      content: 'En termes de structure :\n' +
        '\n' +
        '    votre AppComponent contiendra l\'array des posts, et il le passera à un component PostListComponent\n' +
        '    votre PostListComponent affichera un PostListItemComponent pour chaque post dans l\'array qu\'il a reçu\n' +
        '    chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template',
      lastUp: new Date(),
    },
    {
      title: 'Deuxieme blog',
      content: 'En termes de structure :\n' +
        '\n' +
        '    votre AppComponent contiendra l\'array des posts, et il le passera à un component PostListComponent\n' +
        '    votre PostListComponent affichera un PostListItemComponent pour chaque post dans l\'array qu\'il a reçu\n' +
        '    chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template',
      lastUp: new Date(),
    },
    {
      title: 'Encore un autre',
      content: 'En termes de structure :\n' +
        '\n' +
        '    votre AppComponent contiendra l\'array des posts, et il le passera à un component PostListComponent\n' +
        '    votre PostListComponent affichera un PostListItemComponent pour chaque post dans l\'array qu\'il a reçu\n' +
        '    chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template',
      lastUp: new Date(),
    }
  ];
}
