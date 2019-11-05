import Patch from './patch';

Patch.install = Vue => {
    Vue.component(Patch.name, Patch);
};

export default Patch;
