import { Component, Prop, Element, State } from '@stencil/core'

@Component({
  tag: 'simple-button',
  styleUrl: 'simple-button.scss',
  shadow: true
})
export class ButtonComponent {

  @Prop() type: 'basic' | 'raised' | 'outline' | 'flat' = 'basic'
  @Prop() color: 'plain' | 'primary' | 'secondary' | 'danger' = 'plain'

  @State() ripples: JSX.Element[] = []

  @Element() buttonEl: HTMLElement

  handleClick = (event) => {
    const buttonX = this.buttonEl.offsetLeft
    const buttonY = this.buttonEl.offsetTop
    let width = this.buttonEl.offsetWidth
    let height = this.buttonEl.offsetHeight

    // make the ripple round
    if (width > height) {
      height = width
    } else {
      width = height
    }

    const x = event.pageX - buttonX - width / 2
    const y = event.pageY - buttonY - height / 2

    const rippleStyles = {
      width: width + 'px',
      height: height + 'px',
      top: y + 'px',
      left: x + 'px'
    }

    this.ripples = [...this.ripples, (<span class="ripple" style={rippleStyles} />)]
  }

  render() {
    return (
      <button class={`${this.type} ${this.color}`} onMouseDown={this.handleClick}>
        {...this.ripples}
        <slot />
      </button>
    )
  }
}
