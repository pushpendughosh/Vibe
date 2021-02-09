
import { action, observable } from "mobx";

class HomeStore {
    @observable activeTab: number = 0
    @observable activeEventDisplay: any = null
    
}

export default new HomeStore();