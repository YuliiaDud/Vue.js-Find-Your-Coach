export default {
    addCoach(state, paylod){
        state.coaches.push(paylod);
    },
    setCoaches(state, payload) {
        state.coaches = payload;
    }
}