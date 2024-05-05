//import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior (to, from, savedPosition) {
    //returning if savePsotion is not available
    if(savedPosition) return;

    //if hashed then set position and behavior
    if(to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
            top: 150
        }
    }
    
    //setting the defaults
    return { top: 0, left: 0, behavior: 'smooth' }
  }
}