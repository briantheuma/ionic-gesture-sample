import React, { Component } from 'react';
import { createGesture, Gesture } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

//const ExploreContainer: React.FC<ContainerProps> = ({ name }) =>
class ExploreContainer extends Component<ContainerProps> {

  
  componentDidMount() {
    this.gesture.enable();
  }


  pg:any = document.querySelector('.ppp');
  gesture: Gesture = createGesture({
    el: document.querySelector('.container')!,
    threshold: 15,
    gestureName: 'my-gest',
    onMove: (detail) => {
      console.log('test');
      //this.onMove(detail)
    }
  });

  onMove = (detail: any) => {
    console.log('IN IN IN MOVE!');
    const type = detail.type;
    const currentX = detail.currentX;
    const deltaX = detail.deltaX;
    const velocityX = detail.velocityX;
    //let pg = document.querySelector('p');
    this.pg.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
  }

  render() {
    return (
      <div className="container">
        <strong>{this.props.name}</strong>
        <p>click and drag anywhere on this page</p>
        <p className="ppp"></p>
      </div>
    );
  }

};

export default ExploreContainer;
