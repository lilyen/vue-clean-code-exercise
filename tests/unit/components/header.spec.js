import Header from '@/components/Header'
import {shallowMount} from "@vue/test-utils";

describe("test birthday", ()=>{
    it("profileCaption not birthday", ()=>{
        let wrapper = shallowMount(Header,
            {
                 methods: {
                      getToday() { return new Date("2018-10-18") }
                 }
            });
        expect(wrapper.vm.profileCaption).toEqual('Jackson')
    })
    it("test birthday", () => {
        let wrapper = shallowMount(Header, { methods: { getToday() { return new Date("2018-10-18")}} });
        //getToday.mockReturnValue();
        expect(wrapper.vm.profileCaption).toEqual('Jackson🎂');
    })
})

//describe("test birthday", ()=>{
//    let wrapper
//    let $router = {push: () => {}}
//    let push = jest.spyOn($router, 'push')
//    beforeEach(() => {
//        wrapper = shallowMount(Header, {
//            mocks: {
//                $router
//            }
//        })
//        push.mockClear()
//    })

//    it('test profileCaption', ()=>{
//        expect(wrapper.vm.profileCaption).toEqual('Jackson')
//    })
//})

