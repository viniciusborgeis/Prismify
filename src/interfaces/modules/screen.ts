import blessed, { Widgets } from 'blessed';

export interface IPrismifyScreenCore {
  addWidget(widget: Widgets.Node): void;
  removeWidget(widget: Widgets.Node): void;
  getScreen(): Widgets.Screen;
  getBody(): Widgets.BoxElement;
  createKeyListener(key: string, callback: () => void): void;
}

export interface IPrismifyScreenOptions {
  title?: string;
}
