/* eslint-disable no-param-reassign */

export function inject(target, name, descriptor, ...stats) {
  const oldFunction = descriptor.value;
  descriptor.value = function propsInjectorFunction() {
    const args = stats.map(val => this[val]);
    return oldFunction.bind(this)(...args);
  };
  return descriptor;
}

export const injectProps = (...args) => inject(...args, 'props');
export const injectState = (...args) => inject(...args, 'state');
export const injectStateAndProps = (...args) => inject(...args, 'props', 'state');
