import { mount } from 'vue-test-utils';
import Hello from '../src/Hello.vue';

describe('Hello Component', () => {
    test('it can render the message', () => {
        // // The way to pass property data to the constructor.
        const wrapper = mount(Hello, {
            propsData: {
                name: 'Foo'
            }
        });

        expect(wrapper.vm.$el.textContent).toBe('Hello, Foo');
    });

    test('it can compute the greeting message', () => {
        const wrapper = mount(Hello, {
            propsData: {
                name: 'Bar' // passed to the props
            }
        });

        expect(wrapper.vm.greet).toBe('Hello, Bar');
    });

    test('it can return the upper case greeting message', () => {
        // The way to pass property data to the constructor.
        const wrapper = mount(Hello, {
            propsData: {
                name: 'Foobar' // passed to the props
            }
        });

        expect(wrapper.vm.greetToUpper()).toBe('HELLO, FOOBAR');
    });
});

