import React, { Component } from 'react';
import { createGesture, Gesture } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

export default class ExploreContainer extends Component<ContainerProps> {
  myRef: any;
  containerRef: any;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    const gesture: Gesture = createGesture({
      el: this.containerRef.current!,
      threshold: 15,
      gestureName: 'my-gest',
      onMove: (detail: any) => {
        console.log('test');
        this.onMove(detail);
      }
    });
    gesture.enable();
  }

  onMove(detail: any) {
    console.log('IN IN IN MOVE!');
    const type = detail.type;
    const currentX = detail.currentX;
    const deltaX = detail.deltaX;
    const velocityX = detail.velocityX;
    this.myRef.current.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `;
  }

  render() {
    return (
      <div ref={this.containerRef}>
        <strong>{this.props.name}</strong>
        <p>click and drag anywhere on this page</p>
        <p ref={this.myRef} />
      </div>
    );
  }
}