import Vue, { VNode, VueConstructor } from 'vue';
import { ScopedSlotReturnValue } from 'vue/types/vnode';
import { renderTNodeJSX } from '../utils/render-tnode';
import { prefix } from '../config';
import CLASSNAMES from '../utils/classnames';
import props from '../../types/option-group/props';
const name = `${prefix}-option-group`;

export interface Select extends Vue {
  tSelect: {
    size: string;
  };
}

export default (Vue as VueConstructor<Select>).extend({
  name,
  props: { ...props },
  inject: {
    tSelect: {
      default: undefined,
    },
  },
  computed: {
    classes(): ClassName {
      return [
        name,
        {
          [CLASSNAMES.SIZE[this.tSelect.size]]: this.tSelect && this.tSelect.size,
        },
      ];
    },
  },
  render(): VNode {
    const children: ScopedSlotReturnValue = renderTNodeJSX(this, 'default');
    return (
      <li class={this.classes}>
        <ul class={`${name}-header`}>{ this.label }</ul>
        <ul>
          {children}
        </ul>
      </li>
    );
  },
});