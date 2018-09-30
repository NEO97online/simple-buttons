import { Component, Prop, Element, State } from '@stencil/core'

@Component({
  tag: 'simple-button',
  styleUrl: 'simple-button.scss',
  shadow: true
})
export class ButtonComponent {

  @Prop() type: 'basic' | 'raised' | 'outline' | 'flat' = 'basic'
  @Prop() color: 'plain' | 'primary' | 'secondary' | 'danger' = 'plain'

  @State() ripples: any[] = []

  @Element() buttonEl: HTMLElement

  x: number
  y: number
  w: number
  h: number

  componentDidLoad() {
    this.x = this.buttonEl.offsetLeft
    this.y = this.buttonEl.offsetTop
    this.w = this.buttonEl.offsetWidth
    this.h = this.buttonEl.offsetHeight

    // make the ripple round
    if (this.w > this.h) {
      this.h = this.w
    } else {
      this.w = this.h
    }
  }

  handleClick = (event) => {
    console.log(event)
    const x = event.pageX - this.x - this.w / 2
    const y = event.pageY - this.y - this.h / 2

    const rippleStyles = {
      width: this.w + 'px',
      height: this.h + 'px',
      top: y + 'px',
      left: x + 'px'
    }

    console.log(rippleStyles)

    this.ripples = [...this.ripples, (<span class="ripple" style={rippleStyles} />)]
  }

  render() {
    return [
      <button class={`${this.type} ${this.color}`} onClick={this.handleClick}>
        {...this.ripples}
        <slot />
      </button>
    ]
  }
}
