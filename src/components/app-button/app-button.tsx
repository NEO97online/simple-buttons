import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.scss',
  shadow: true
})
export class ButtonComponent {

  @Prop() type: 'basic' | 'raised' | 'outline' | 'flat' = 'basic'

  @Prop() color: 'plain' | 'primary' | 'secondary' | 'danger' = 'plain'

  render() {
    return (
      <button class={`${this.type} ${this.color}`}>
        <slot />
      </button>
    )
  }
}
