import { shallowMount } from '@vue/test-utils'
import VueTailwindModal from '../../src/components/VueTailwindModal.vue'

var expect = require('chai').expect

describe('vue-tailwind-modal', () => {

    it('display modal', () => {
        const wrapper = shallowMount(VueTailwindModal, {
            props: {
                showing: true
            }
        })

        expect(wrapper.vm.showing).to.equal(true)
    })

    it('hide modal', async () => {
        const wrapper = shallowMount(VueTailwindModal, {
            props: {
                showing: true
            }
        })

        const button = wrapper.find('button')
        await button.trigger('click')

        expect(wrapper.emitted()['update:showing'][0][0]).to.equal(false)
        expect(wrapper.emitted()['close']).to.exist
    })

    it('without close button', async () => {
        const wrapper = shallowMount(VueTailwindModal, {
            props: {
                showing: true,
                showClose: false
            }
        })

        const button = wrapper.find('button')

        expect(button.exists()).to.equal(false)
    })
})
