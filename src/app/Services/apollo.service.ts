import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})

export class GraphQLService {
  // public mstPeople: mstPersonType[];

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      //link: httpLink.create({ uri: 'http://localhost:5001/graphql' }),
      link: httpLink.create({ uri: 'https://tinkerpiapi.azurewebsites.net:5001/graphql' }),
      cache: new InMemoryCache()
    });
  }

  public getPeople = () => {
    this.apollo.query({
      query: gql`query {
        mstPeopleList
        {
          firstName
          lastName
        }
      }
    `
    }).subscribe(result => {
      // this.mstPeople = result.data as mstPersonType[];
    });
  }
}
