import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter value', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filterReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filterReducer(undefined, { 
        type: 'SET_TEXT_FILTER',
        text: 'eee'
    });
    expect(state.text).toBe('eee');
});

test('should set start date', () => {
    const startDate = moment();
    const state = filterReducer(undefined, { 
        type: 'SET_START_DATE',
        date: startDate
    });
    expect(state.startDate).toEqual(startDate);
});

test('should set end date', () => {
    const endDate = moment();
    const state = filterReducer(undefined, { 
        type: 'SET_END_DATE',
        date: endDate
    });
    expect(state.endDate).toEqual(endDate);
});