/* eslint-disable @typescript-eslint/no-empty-interface */
import { Widgets } from 'blessed';

export interface IPrismifyBoxWidgetOptions extends Widgets.BoxOptions {}

export class PrismifyBoxWidget extends Widgets.BoxElement {
  constructor(options: IPrismifyBoxWidgetOptions) {
    super({
      ...options,
      style: {
        fg: 'white',
        bg: 'black',
        ...options.style,
      },
    });
  }

  public addWidget(widget: Widgets.Node) {
    this.append(widget);
  }

  public removeWidget(widget: Widgets.Node) {
    widget.detach();
  }
}
