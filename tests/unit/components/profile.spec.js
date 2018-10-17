import profile from "@/views/Profile"
import Api from '@/api'
import { shallowMount } from '@vue/test-utils'

describe("profile", () => {
    it("save call api updateProfile", () => {
        let updateProfile = Api.updateProfile = jest.fn();
        let wrapper = shallowMount(profile);

        wrapper.vm.save();

        expect(updateProfile).toHaveBeenCalled();
    })
    //it("save call api updateProfile meth2", () => {
    //    let wrapper = shallowMount(profile);

    //    wrapper.vm.save();

    //    expect(Api.updateProfile).toHaveBeenCalled();
    //})
    it("save call updateProfile use profile data", () => {
        let updateProfile = Api.updateProfile = jest.fn();
        let profileValue = {
            name: 'Lily',
            birthday: {
                year: 1993,
                month: 2,
                day: 1,
            }
        };
        let wrapper = shallowMount(profile);
        wrapper.vm.profile = profileValue;

        wrapper.vm.save();

        expect(updateProfile).toHaveBeenCalledWith(profileValue);
    })
})