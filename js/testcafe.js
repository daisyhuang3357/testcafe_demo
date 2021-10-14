import { Selector } from 'testcafe';

fixture `testcafe_test`
    .page `https://todomvc.com/examples/react/#/`;

test('Add an entry', async t => {
    const addEntry = 'add an entry';
    await t
        // add an entry
        .typeText('.new-todo', addEntry)
        .pressKey('enter')
        // assert todo-list visible
        .expect(Selector('.todo-list').visible).ok('Todo-list not visible')
        // assert todo-list label innerText
        .expect(Selector('.todo-list .view label').innerText).eql(addEntry);
})

test('Delete an entry', async t => {
    const deleteEntry = 'delete an entry';
    await t 
        // add an entry
        .typeText('.new-todo', deleteEntry)
        .pressKey('enter')
        // assert todo-list label
        .expect(Selector('.todo-list .view label').innerText).eql(deleteEntry)
        
        // delete an entry
        .hover('.todo-list .view label')
        .click('.todo-list .view button')
        // assert todo-list not visible
        .expect(Selector('.todo-list').visible).notOk('Todo-list is visible');
 })

 test('Set status to completed', async t => {
    const setEntryStatus = 'set entry status';
    await t 
        // add an entry
        .typeText('.new-todo', setEntryStatus)
        .pressKey('enter')
        // assert todo-list label
        .expect(Selector('.todo-list .view label').innerText).eql(setEntryStatus)

        // set status to completed
        .click('.todo-list .view input')
        // select completed
        .click('.filters li:nth-child(5)')
        // assert completed todo-list visible
        .expect(Selector('.todo-list').visible).ok('Completed todo-list not visible')
        // assert todo-list label innerText
        .expect(Selector('.todo-list .view label').innerText).eql(setEntryStatus);
 })