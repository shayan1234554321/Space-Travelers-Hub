import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer, { getAllMissions, SwitchMission } from '../redux/missions/missionsSlice.js';

const mockStore = configureStore([thunk]);

describe('missions actions', () => {
  it('should dispatch action to get all missions', async () => {

    const store = mockStore({ missions: [] });

    await store.dispatch(getAllMissions());

    expect(store.getActions().length).toEqual(2);
  });

  it('should dispatch action to switch mission', () => {
    const mission = { id: 1, name: 'Mission 1', reserved: false };
    const expectedActions = [
      { type: SwitchMission.type, payload: { missions: [mission], id: 1 } },
    ];

    const store = mockStore({ missions: [mission] });

    store.dispatch(SwitchMission({ missions: [mission], id: 1 }));

    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('missions reducer', () => {
  it('should handle get all missions pending', () => {
    const newState = reducer(undefined, {
      type: getAllMissions.pending.type,
    });

    expect(newState).toEqual({
      missions: [],
      loading: true,
    });
  });

  it('should handle get all missions fulfilled', () => {
    const payload = [{ id: 1, name: 'Mission 1' }];
    const newState = reducer(undefined, {
      type: getAllMissions.fulfilled.type,
      payload,
    });

    expect(newState).toEqual({
      missions: payload,
      loading: false,
    });
  });
});