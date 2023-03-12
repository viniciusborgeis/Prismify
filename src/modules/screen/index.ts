import blessed, { Widgets } from 'blessed';
import { IPrismifyScreenCore, IPrismifyScreenOptions } from '@types';

export default class PrismifyScreen implements IPrismifyScreenCore {
  private screen: Widgets.Screen;
  private body: Widgets.BoxElement;
  private bodyStyle: Widgets.BoxOptions | undefined;

  constructor(
    options?: IPrismifyScreenOptions,
    bodyStyle?: Widgets.BoxOptions,
  ) {
    this.bodyStyle = bodyStyle;
    this.screen = blessed.screen({
      smartCSR: true,
      autoPadding: false,
      ...options,
    });

    this.body = blessed.box({
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      style: {
        fg: 'white',
        bg: 'red',
      },
      scrollable: true,
      alwaysScroll: true,
      mouse: true,
      scrollbar: {
        style: {
          bg: 'blue',
        },
      },
      autoPadding: false,
      ...this.bodyStyle,
    });

    this.screen.append(this.body);

    // Quit on Escape, q, or Control-C.
    this.screen.key(['escape', 'q', 'C-c'], () => {
      process.exit(0);
    });

    this.screen.render();
  }

  public addWidget(widget: Widgets.Node) {
    this.body.append(widget);
    this.screen.render();
  }

  public removeWidget(widget: Widgets.Node) {
    widget.detach();
    this.screen.render();
  }

  public getScreen() {
    return this.screen;
  }

  public getBody() {
    return this.body;
  }

  public createKeyListener(key: string, callback: () => void) {
    this.screen.key(key, callback);
  }
}
