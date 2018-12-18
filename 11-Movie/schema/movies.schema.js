import CannerScript from 'canner-script';
import {imageStorage} from './utils';
import React from 'react';
const columns = [{
  title: 'Poster',
  dataIndex: 'poster',
  render: (text) => {
    return React.createElement('img', {height: '60px', src: text.url});
  }
}, {
  title: 'Title',
  dataIndex: 'title'
}, {
  title: 'Release Year',
  dataIndex: 'releaseYear'
}, {
  title: 'Genres',
  dataIndex: 'genres.name'
}, {
  title: 'Director',
  dataIndex: 'director',
  render: (data) => {
    return `${data.firstName} ${data.lastName}`;
  }
}, {
  title: 'Movie Length',
  dataIndex: 'movieLength'
}]

export default () => (
  <array keyName="movies" title="Movies"
    ui="tableRoute"
    imageStorage={imageStorage}
    uiParams={{
      columns
    }}
    cacheActions
    controlDeployAndResetButtons
    packageName="../components/inputs/customize-array-card_list"
  >
    <string keyName="title" title="Movie Name" required/>
    <image keyName="poster" title="Poster" required/>
    <number keyName="releaseYear" title="Release Year" required/>
    <relation keyName="genres" title="Genres"
      relation={{
        to: 'genres',
        type: 'toOne'
      }}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name'
        }]
      }}/>
    <relation keyName="actors" title="Actors"
      relation={{
        to: 'actors',
        type: 'toMany'
      }}
      ui="multipleSelect"
      uiParams={{
        textCol: 'name',
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name',
          render: (text, data) => {
            return `${data.firstName} ${data.lastName}`;
          }
        }]
      }}/>
    <relation keyName="director" title="Director"
      relation={{
        to: 'directors',
        type: 'toOne'
      }}
      uiParams={{
        textCol: (data) => `${data.firstName} ${data.lastName}`,
        columns: [{
          title: "Name",
          key: 'name',
          dataIndex: 'name',
          render: (text, data) => {
            return `${data.firstName} ${data.lastName}`;
          }
        }]
      }}/>
    <number keyName="rating" ui="rate" title="Rating" required uiParams={{allowHalf: true}}/>
    <object keyName="plot" ui="editor" title="Plot"/>
    <number keyName="movieLength" title="Movie Length" required/>
  </array>
);