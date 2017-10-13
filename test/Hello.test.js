import Vue from 'vue';
import Hello from '../src/Hello.vue';

test('it can render the message', () => {
    // The way to pass property data to the constructor.
    let ExtendedHello = Vue.extend(Hello);
    let vm = new ExtendedHello({
        propsData: {
            name: 'John' // passed to the props
        }
    });

    vm.$mount();

    expect(vm.$el.textContent).toBe('Hello, John');
});

test('it can compute the greeting message', () => {
    // The way to pass property data to the constructor.
    let ExtendedHello = Vue.extend(Hello);
    let vm = new ExtendedHello({
        propsData: {
            name: 'Doe' // passed to the props
        }
    });

    vm.$mount();

    expect(vm.greet).toBe('Hello, Doe');
});

test('it can return the upper case greeting message', () => {
    // The way to pass property data to the constructor.
    let ExtendedHello = Vue.extend(Hello);
    let vm = new ExtendedHello({
        propsData: {
            name: 'Doe' // passed to the props
        }
    });

    vm.$mount();

    expect(vm.greetToUpper()).toBe('HELLO, DOE');
});
