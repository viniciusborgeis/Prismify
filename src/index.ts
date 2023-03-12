import PrismifyScreen from '@modules/screen';
import { PrismifyBoxWidget } from '@modules/widgets';

class Test extends PrismifyScreen {
  private newBox: PrismifyBoxWidget;
  constructor() {
    super({ title: 'testando' }, { style: { bg: 'black' } });

    this.newBox = new PrismifyBoxWidget({
      style: { bg: 'orange' },
      width: '50%',
      height: '50%',
    });

    this.addWidget(this.newBox);
  }
}

new Test();
